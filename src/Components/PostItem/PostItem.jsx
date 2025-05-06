import React, {useContext} from 'react';
import CustomButton from "../UI/CustomButton/CustomButton";
import "./PostItem.scss"
import ThemeContext from "../../Contexts/ThemeContext";
import {deletePostFx, handleEdit} from "../../utils/todo";

const PostItem = ({number, id, post}) => {
    const {isDarkTheme} = useContext(ThemeContext);

    return (
        <div className={`post post--${(isDarkTheme)? "Dark" : "Light"}`}>
            <div className={`post__item post__item--${(isDarkTheme)? "Dark" : "Light"}`} >
                <strong> {number}.{post.title} </strong>
                <div> {post.body} </div>
            </div>
            <div className="post__btns">
                <CustomButton  id="editButton" text="Edit" size="small" variant="primary" onClick={() => handleEdit({...post, id})}/>
                <CustomButton  id="deleteButton" text="Delete" size="small" variant="primary" onClick={() => deletePostFx(id)} />
            </div>
        </div>
    );
};

export default PostItem;