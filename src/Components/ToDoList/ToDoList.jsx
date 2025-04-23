import React, {useContext, useEffect, useState} from 'react';
import MySelect from "../UI/select/MySelect";
import PostForm from "../PostForm/PostForm";
import PostList from "../PostList/PostList";
import ThemeContext from "../../Contexts/ThemeContext";
import "./ToDoList.scss";
import {makeDefaultToDoPost} from "../../utils/todo";
import {fetchData, transformIDsIntoURL} from "../API/fetchToDoListData";

const ToDoList = () => {
    const {isDarkTheme} = useContext(ThemeContext);
    const [postData, setPostData] = useState([]);
    const [postIDs, setPostIDs] = useState([]);
    const [post, setPost] = useState(makeDefaultToDoPost());

    async function receivePostData() {
        const requestResult = await fetchData(postIDs);

        if (!requestResult) {
            return;
        }

        if (!("body" in (requestResult[0]?.data || {}))) {
            setPostData([]);
            return;
        }
        setPostData(requestResult);
    }

    useEffect(() => {
        receivePostData();
    },[postIDs])

    return (
        <div>
            <PostForm setPostIDs={setPostIDs} postIDs={postIDs} post={post} setPost={setPost} onUpdatePostList={receivePostData}/>
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