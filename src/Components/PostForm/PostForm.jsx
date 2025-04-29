import React from 'react';
import CustomButton from "../UI/CustomButton/CustomButton";
import CustomInput from "../UI/CustomInput/CustomInput";
import {makeDefaultToDoPost} from "../../utils/todo";

const PostForm = ({postIDs,setPostIDs,post,setPost,onUpdatePostList}) => {


    async function addNewPost(e) {
        e.preventDefault();
        const addNewPostRequest = await fetch('https://api.restful-api.dev/objects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({data: post})
        });

        setPost({title:"", body:""});

        const newPost = await addNewPostRequest.json();
        setPostIDs([...postIDs, newPost.id]);
    }

    async function saveEditedPost(e) {
        e.preventDefault();
        const editPostRequest = await fetch('https://api.restful-api.dev/objects/'+post.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({data: post})
        });
        setPost(makeDefaultToDoPost());
        onUpdatePostList();
    }

    return (
        <form>
            <CustomInput
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Title"
                style={{width:"100%", padding: "5px 15px", margin:"5px 0"}} />
            <CustomInput
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Description"
                style={{width:"100%", padding: "5px 15px", margin:"5px 0"}} />
            {   (post.id)
                ?
                <CustomButton id="saveButton" text="Save" size="medium" variant="primary" onClick={saveEditedPost}/>
                :
                <CustomButton id="addPostButton" text="Add post" size="medium" variant="primary" onClick={addNewPost}/>
            }
        </form>
    );
};

export default PostForm;