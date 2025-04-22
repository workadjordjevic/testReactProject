import React, {useContext} from 'react';
import CustomButton from "../UI/CustomButton/CustomButton";
import "./PostItem.scss"
import ThemeContext from "../../Contexts/ThemeContext";

const PostItem = ({setPostIDs, postIDs, number, id, post, setPost}) => {
    const {isDarkTheme} = useContext(ThemeContext);

    async function deletePost(postID) {
        const deletePostURL = "https://api.restful-api.dev/objects/"+postID;

        await fetch(deletePostURL, {
            method: 'DELETE'
        });

         setPostIDs(postIDs.filter(p => p !== postID));
    }

    function setPostFormData(postID) {
        const pos = (document.getElementById(postID+"title").innerText).indexOf(".");
        const postTitle = (document.getElementById(postID+"title").innerText).substring(pos+1);
        const postBody = document.getElementById(postID+"body").innerText;
        console.log(postTitle,postBody);
         setPost({body:postBody, title: postTitle})
    }

    return (
        <div className={`post post--${(isDarkTheme)? "Dark" : "Light"}`}>
            <div className={`post__item post__item--${(isDarkTheme)? "Dark" : "Light"}`} >
                <strong id={id+"title"}> {number}.{post.title} </strong>
                <div id={id+"body"}> {post.body} </div>
            </div>
            <div className="post__btns">
                <CustomButton  id="editButton" text="Edit" size="small" variant="primary" onClick={() => setPostFormData(id)}/>
                <CustomButton  id="deleteButton" text="Delete" size="small" variant="primary" onClick={() => deletePost(id)} />
            </div>
        </div>
    );
};

export default PostItem;