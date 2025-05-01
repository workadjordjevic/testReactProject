import React, {useEffect} from 'react';
import CustomButton from "../UI/CustomButton/CustomButton";
import CustomInput from "../UI/CustomInput/CustomInput";
import {
    $post,
    $postData,
    addNewPostFx,
    makeDefaultToDoPost,
    postIDsUpdate,
    refetchPostList, saveEditedPostFx
} from "../../utils/todo";
import {createEffect, sample} from "effector";

const PostForm = ({postIDs,setPostIDs,post,onUpdatePostList}) => {

    const createNewPost =  (e) => {
        e.preventDefault();
        addNewPostFx(post)
    }

    $postData.on(addNewPostFx.doneData, async(postData, response) => {
        // setPost(makeDefaultToDoPost());
        const newPost = await response.json();
        setPostIDs([...postIDs, newPost.id]);
    })

    $post.on(addNewPostFx.doneData, async(_, newPost) => makeDefaultToDoPost())

    //  $postData.on переписать на 2 on, для пост и постИД сторов, возвращать из их редюсера то что сейчас передаём
    //  в setPost setPostIDs

    useEffect(() => {
        postIDsUpdate(postIDs);
    }, [postIDs]);

    const saveChangesInEditedPost = (e) => {
        e.preventDefault();
        saveEditedPostFx(post)
    }

    $post.on(saveEditedPostFx.doneData, async(_,newPost) => makeDefaultToDoPost())

    sample({
        clock: post,
        target: refetchPostList(postIDs),
    })

    return (
        <form>
            <CustomInput
                value={post.title}
                // onChange={(e) => setPost({...post, title: e.target.value})} // ???
                type="text"
                placeholder="Title"
                style={{width:"100%", padding: "5px 15px", margin:"5px 0"}} />
            <CustomInput
                value={post.body}
                // onChange={(e) => setPost({...post, body: e.target.value})} // ???
                type="text"
                placeholder="Description"
                style={{width:"100%", padding: "5px 15px", margin:"5px 0"}} />
            {   (post.id)
                ?
                <CustomButton id="saveButton" text="Save" size="medium" variant="primary" onClick={saveChangesInEditedPost}/>
                :
                <CustomButton id="addPostButton" text="Add post" size="medium" variant="primary" onClick={createNewPost}/>
            }
        </form>
    );
};

export default PostForm;