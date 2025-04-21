import React, {useContext} from 'react';
import CustomButton from "../UI/CustomButton/CustomButton";
import "./PostItem.scss"
import ThemeContext from "../../Contexts/ThemeContext";

const PostItem = ({setPostIDs, postIDs, number, id, post}) => {
    const {isDarkTheme} = useContext(ThemeContext);

    async function deletePost(postID) {
        const deletePostURL = "https://api.restful-api.dev/objects/"+postID;

        await fetch(deletePostURL, {
            method: 'DELETE'
        });

         setPostIDs(postIDs.filter(p => p !== postID));
    }

    return (
        <div className={`post post--${(isDarkTheme)? "Dark" : "Light"}`}>
            <div className={`post__item post__item--${(isDarkTheme)? "Dark" : "Light"}`}>
                <strong> {number}.{post.title} </strong>
                <div> {post.body} </div>
            </div>
            <div className="post__btns">
                <CustomButton  id="deleteButton" text="Delete" size="small" variant="primary" onClick={() => deletePost(id)} />
            </div>
        </div>
    );
};

export default PostItem;