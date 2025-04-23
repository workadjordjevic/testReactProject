import React, {useContext} from 'react';
import CustomButton from "../UI/CustomButton/CustomButton";
import "./PostItem.scss"
import ThemeContext from "../../Contexts/ThemeContext";

const PostItem = ({setPostIDs, postIDs, number, id, post, onEditPost}) => {
    const {isDarkTheme} = useContext(ThemeContext);

    async function deletePost(postID) {
        const deletePostURL = "https://api.restful-api.dev/objects/"+postID;

        await fetch(deletePostURL, {
            method: 'DELETE'
        });

         setPostIDs(postIDs.filter(p => p !== postID));
    }

    function handleEdit() {
        onEditPost({body:post.body, title:post.title, id});
    }

    return (
        <div className={`post post--${(isDarkTheme)? "Dark" : "Light"}`}>
            <div className={`post__item post__item--${(isDarkTheme)? "Dark" : "Light"}`} >
                <strong> {number}.{post.title} </strong>
                <div> {post.body} </div>
            </div>
            <div className="post__btns">
                <CustomButton  id="editButton" text="Edit" size="small" variant="primary" onClick={handleEdit}/>
                <CustomButton  id="deleteButton" text="Delete" size="small" variant="primary" onClick={() => deletePost()} />
            </div>
        </div>
    );
};

export default PostItem;