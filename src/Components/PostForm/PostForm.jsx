import React, {useEffect} from 'react';
import CustomButton from "../UI/CustomButton/CustomButton";
import CustomInput from "../UI/CustomInput/CustomInput";
import {
    $post, $postData,
    addNewPostFx, postBodyChange,
    postIDsUpdate, postTitleChange, saveEditedPostFx
} from "../../utils/todo";

const PostForm = ({postIDs,post}) => {

    const createNewPost =  (e) => {
        e.preventDefault();
        addNewPostFx(post)
    }

    $post.reset(addNewPostFx.doneData);

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
                <CustomButton id="saveButton" text="Save" size="medium" variant="primary" type="submit" onClick={saveChangesInEditedPost}/>
                :
                <CustomButton id="addPostButton" text="Add post" size="medium" variant="primary" type="submit" onClick={createNewPost}/>
            }
        </form>
    );
};

export default PostForm;