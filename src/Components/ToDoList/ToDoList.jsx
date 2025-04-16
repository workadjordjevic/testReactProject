import React, {useContext, useState} from 'react';
import MySelect from "../UI/select/MySelect";
import PostForm from "../PostForm/PostForm";
import PostList from "../PostList/PostList";
import ThemeContext from "../../Contexts/ThemeContext";
import "./ToDoList.scss";

const ToDoList = () => {
    const [posts,setPosts] = useState([{id:1, title:"js", body:"Description"}]);
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const {isDarkTheme} = useContext(ThemeContext);

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
                 {posts.length
                     ?
                     <PostList remove={removePost} posts={posts} title={"List"} />
                     :
                     <h1 className={`noPostsPlaceholder noPostsPlaceholder--${(isDarkTheme)? "Dark" : "Light"}`}>
                         Nothing here
                     </h1>
                 }
        </div>
    );
};

export default ToDoList;