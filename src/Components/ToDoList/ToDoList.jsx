import React, {useState} from 'react';
import MySelect from "../UI/select/MySelect";
import PostForm from "../PostForm";
import PostList from "../PostList";

const ToDoList = () => {
    const [posts,setPosts] = useState([{id:1, title:"js", body:"Description"}]);
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
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
                     <h1 style={{textAlign:"center"}}>
                         Nothing here
                     </h1>
                 }
        </div>
    );
};

export default ToDoList;