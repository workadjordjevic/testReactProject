import React, {useContext, useEffect, useState} from 'react';
import MySelect from "../UI/select/MySelect";
import PostForm from "../PostForm/PostForm";
import PostList from "../PostList/PostList";
import ThemeContext from "../../Contexts/ThemeContext";
import "./ToDoList.scss";
import {$postData, makeDefaultToDoPost, postIDsUpdate, postListUpdate} from "../../utils/todo";
import {fetchData} from "../API/fetchToDoListData";
import {createStore, createEffect, sample, createEvent} from "effector";
import {useUnit} from "effector-react";

const ToDoList = () => {
    const {isDarkTheme} = useContext(ThemeContext);
    const [postIDs, setPostIDs] = useState([]);
    const [post, setPost] = useState(makeDefaultToDoPost());
    const postData = useUnit($postData);

    return (
        <div>
            <PostForm setPostIDs={setPostIDs} postIDs={postIDs} post={post} setPost={setPost}/>
                 <hr style={{margin: "15px 0"}}/>
                <div>
                     <MySelect
                         defaultValue= {"Sort by: "}
                         options={[]}
                     />
                 </div>
                { postData.length
                    ?
                    <PostList posts={postData} postIDs={postIDs} setPostIDs={setPostIDs} title={"List"} setPost={setPost}/>
                    :
                    <h1 className={`noPostsPlaceholder noPostsPlaceholder--${(isDarkTheme)? "Dark" : "Light"}`}>
                        Nothing here
                    </h1>
                }
        </div>
    );
};

export default ToDoList;