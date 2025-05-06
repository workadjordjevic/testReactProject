import React from 'react';
import CustomButton from "../UI/CustomButton/CustomButton";
import CustomInput from "../UI/CustomInput/CustomInput";
import {
    addNewPostFx, postBodyChange,
    postTitleChange, saveEditedPostFx
} from "../../utils/todo";

const PostForm = ({post}) => {

    const createNewPost =  (e) => {
        e.preventDefault();
        addNewPostFx(post)
    }

    const saveChangesInEditedPost = (e) => {
        e.preventDefault();
        saveEditedPostFx(post)
    }

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