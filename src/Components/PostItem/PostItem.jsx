import React, {useContext} from 'react';
import CustomButton from "../UI/CustomButton/CustomButton";
import "./PostItem.scss"
import ThemeContext from "../../Contexts/ThemeContext";
import {$post, deletePostFx, handleEdit} from "../../utils/todo";

const PostItem = ({ postIDs, number, id, post}) => {
    const {isDarkTheme} = useContext(ThemeContext);

    //  const deletePostFx = createEffect(async (postID) => {
    //     const deletePostURL = "https://api.restful-api.dev/objects/"+postID;
    //
    //     let res = await fetch(deletePostURL, {
    //         method: 'DELETE'
    //     });
    //
    //     let response = await res.json();
    //     console.log(response);
    //     deletePostIDToPostIDs(postID);
    // })

    $post.on(handleEdit, (_, editedPost) => editedPost);

    return (
        <div className={`post post--${(isDarkTheme)? "Dark" : "Light"}`}>
            <div className={`post__item post__item--${(isDarkTheme)? "Dark" : "Light"}`} >
                <strong> {number}.{post.title} </strong>
                <div> {post.body} </div>
            </div>
            <div className="post__btns">
                <CustomButton  id="editButton" text="Edit" size="small" variant="primary" onClick={() => handleEdit({body:post.body, title:post.title, id})}/>
                <CustomButton  id="deleteButton" text="Delete" size="small" variant="primary" onClick={() => deletePostFx(id)} />
            </div>
        </div>
    );
};

export default PostItem;