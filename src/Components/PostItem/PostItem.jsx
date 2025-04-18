import React, {useContext} from 'react';
import CustomButton from "../UI/CustomButton/CustomButton";
import "./PostItem.scss"
import ThemeContext from "../../Contexts/ThemeContext";

const PostItem = ({setPostIDs, postIDs, number, id, post}) => {
    const {isDarkTheme} = useContext(ThemeContext);

    async function deletePost(id) {
        const deletePostRequest = await fetch(`https://api.restful-api.dev/objects${id}`, {
            method: 'DELETE' // Network error
        });

        setPostIDs(postIDs.filter(p => p.id !== postIDs.id));
    }

    return (
        <div className={`post post--${(isDarkTheme)? "Dark" : "Light"}`}>
            <div className={`post__item post__item--${(isDarkTheme)? "Dark" : "Light"}`}>
                <strong> {number}.{post.title} </strong>
                <div> {post.body} </div>
            </div>
            <div className="post__btns">
                <CustomButton  id="deleteButton" text="Delete" size="small" variant="primary" onClick={deletePost} />
            </div>
        </div>
    );
};

export default PostItem;