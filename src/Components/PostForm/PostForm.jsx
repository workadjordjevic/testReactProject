import React, {useEffect} from 'react';
import CustomButton from "../UI/CustomButton/CustomButton";
import CustomInput from "../UI/CustomInput/CustomInput";
import {
    $postData,
    addNewPostFx,
    makeDefaultToDoPost,
    postIDsUpdate,
    postListUpdate,
    refetchPostList
} from "../../utils/todo";
import {createEffect} from "effector";

const PostForm = ({postIDs,setPostIDs,post,setPost,onUpdatePostList}) => {

    const createNewPost =  (e) => {
        e.preventDefault();
        addNewPostFx(post)
    }

    $postData.on(addNewPostFx.doneData, async(postData, response) => {
        setPost(makeDefaultToDoPost());
        const newPost = await response.json();
        setPostIDs([...postIDs, newPost.id]);
    })

    //  $postData.on переписать на 2 on, для пост и постИД сторов, возвращать из их редюсера то что сейчас передаём
    //  в setPost setPostIDs

    useEffect(() => {
        postIDsUpdate(postIDs);
    }, [postIDs]);

    const saveEditedPostFx = createEffect(async (e) => {
        e.preventDefault();
        const editPostRequest = await fetch('https://api.restful-api.dev/objects/'+post.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({data: post})
        });
        setPost(makeDefaultToDoPost());
        refetchPostList(postIDs);
    })

    return (
        <form>
            <CustomInput
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Title"
                style={{width:"100%", padding: "5px 15px", margin:"5px 0"}} />
            <CustomInput
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Description"
                style={{width:"100%", padding: "5px 15px", margin:"5px 0"}} />
            {   (post.id)
                ?
                <CustomButton id="saveButton" text="Save" size="medium" variant="primary" onClick={saveEditedPostFx}/>
                :
                <CustomButton id="addPostButton" text="Add post" size="medium" variant="primary" onClick={createNewPost}/>
            }
        </form>
    );
};

export default PostForm;