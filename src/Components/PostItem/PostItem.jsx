import React, {useContext} from 'react';
import CustomButton from "../UI/CustomButton/CustomButton";
import "./PostItem.scss"
import ThemeContext from "../../Contexts/ThemeContext";
import {createEffect, createEvent} from "effector";
import {$post, deletePostIDToPostIDs} from "../../utils/todo";

const PostItem = ({ postIDs, number, id, post}) => {
    const {isDarkTheme} = useContext(ThemeContext);
     const deletePostFx = createEffect(async (postID) => {
        const deletePostURL = "https://api.restful-api.dev/objects/"+postID;

        await fetch(deletePostURL, {
            method: 'DELETE'
        });
        deletePostIDToPostIDs(postID);
    })

    const handleEdit = createEvent();
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