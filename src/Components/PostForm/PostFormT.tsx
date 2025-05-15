import React from 'react';
import {
    addNewPostFx, postBodyChange,
    postTitleChange, saveEditedPostFx
} from "../../utils/todo";
import {IPostItem} from "../../Interfaces/Interfaces";
import CustomInputT from "../UI/CustomInput/CustomInputT";
import CustomButtonT from "../UI/CustomButton/CustomButtonT";

const PostForm = ({post} : {post:IPostItem}) => {

    const createNewPost =  (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addNewPostFx(post)
    }

    const saveChangesInEditedPost = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        saveEditedPostFx(post)
    }

    return (
        <form>
            <CustomInputT
                value={post.title}
                onChange={(e) => postTitleChange(e.target.value)}
                type="text"
                placeholder="Title"
                style={{width:"100%", padding: "5px 15px", margin:"5px 0"}} />
            <CustomInputT
                value={post.body}
                onChange={(e) => postBodyChange(e.target.value)}
                type="text"
                placeholder="Description"
                style={{width:"100%", padding: "5px 15px", margin:"5px 0"}} />
            {   (post.id)
                ?
                <CustomButtonT id="saveButton" text="Save" size="medium" variant="primary" onClick={saveChangesInEditedPost}/>
                :
                <CustomButtonT id="addPostButton" text="Add post" size="medium" variant="primary" onClick={createNewPost}/>
            }
        </form>
    );
};

export default PostForm;

// export {};