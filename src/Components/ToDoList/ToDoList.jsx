import React, {useContext, useEffect, useState} from 'react';
import MySelect from "../UI/select/MySelect";
import PostForm from "../PostForm/PostForm";
import PostList from "../PostList/PostList";
import ThemeContext from "../../Contexts/ThemeContext";
import "./ToDoList.scss";

const ToDoList = () => {
    const [posts,setPosts] = useState([{id:1, title:"Title", body:"Description"}]);
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const {isDarkTheme} = useContext(ThemeContext);
    const [postData, setPostData] = useState({});

    function fetchData() {
        const url = "https://api.restful-api.dev/objects";
        return fetch(url)
            .then(response => response.json())
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }

    async function receivePostData() {
        const requestResult = await fetchData();
        setPostData(requestResult);
        console.log(requestResult, "request data");
    }

    useEffect(() => {
        receivePostData();
    },[]) //Что указать в зависимостях у этого юзЭффекта

    return (
        <div>
            <PostForm create={createPost}/>
                 <hr style={{margin: "15px 0"}}/>
                <div>
                     <MySelect
                         defaultValue= {"Sort by: "}
                         options={[]}
                     />
                 </div>
                 <PostList remove={removePost} posts={postData} title={"List"} />
                {/*{ "body" in postData[0]*/}
                {/*    ?*/}
                {/*    <PostList remove={removePost} posts={postData} title={"List"} />*/}
                {/*    :*/}
                {/*    <h1 className={`noPostsPlaceholder noPostsPlaceholder--${(isDarkTheme)? "Dark" : "Light"}`}>*/}
                {/*        Nothing here*/}
                {/*    </h1>*/}
                {/*}*/}
        </div>
    );
};

export default ToDoList;