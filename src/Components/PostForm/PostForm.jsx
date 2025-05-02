import React, {useEffect} from 'react';
import CustomButton from "../UI/CustomButton/CustomButton";
import CustomInput from "../UI/CustomInput/CustomInput";
import {
    $post,
    $postData,
    addNewPostFx, addPostIDToPostIDs,
    makeDefaultToDoPost,
    postIDsUpdate,
    refetchPostList, saveEditedPostFx
} from "../../utils/todo";
import {createEffect, createEvent, sample} from "effector";

const PostForm = ({postIDs,post}) => {

    const postTitleChange = createEvent();
    const postBodyChange = createEvent();

    const createNewPost =  (e) => {
        e.preventDefault();
        addNewPostFx(post)
    }

    $postData.on(addNewPostFx.doneData, async(postData, response) => {
        // setPost(makeDefaultToDoPost());
        const newPost = await response.json();
        addPostIDToPostIDs(newPost.id);
    })

    $post.reset(addNewPostFx.doneData);

    //  $postData.on переписать на 2 on, для пост и постИД сторов, возвращать из их редюсера то что сейчас передаём
    //  в setPost setPostIDs

    useEffect(() => {
        postIDsUpdate(postIDs);
    }, [postIDs]);

    const saveChangesInEditedPost = (e) => {
        e.preventDefault();
        saveEditedPostFx(post)
    }

    $post.reset(saveEditedPostFx.doneData);

    $post.on(postTitleChange,(oldPost,newTitle) => ({...oldPost, title: newTitle}));
    $post.on(postBodyChange,(oldPost,newBody) => ({...oldPost, body: newBody}));

    return (
        <form>
            <CustomInput
                value={post.title}
                onChange={(e) => postTitleChange(e.target.value)}
                type="text"
                placeholder="Title"
                style={{width:"100%", padding: "5px 15px", margin:"5px 0"}} />
            <CustomInput
                value={post.body}
                onChange={(e) => postBodyChange(e.target.value)}
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