import React, {useContext} from 'react';
import MySelect from "../UI/select/MySelect";
import PostForm from "../PostForm/PostForm";
import PostList from "../PostList/PostList";
import ThemeContext from "../../Contexts/ThemeContext";
import "./ToDoList.scss";
import {$post, $postData} from "../../utils/todo";
import {useUnit} from "effector-react";

const ToDoList = () => {
    const {isDarkTheme} = useContext(ThemeContext);
    const {$postData:postData,$post:post} = useUnit({$postData, $post});

    return (
        <div>
            <PostForm post={post}/>
                 <hr style={{margin: "15px 0"}}/>
                <div>
                     <MySelect
                         defaultValue= {"Sort by: "}
                         options={[]}
                     />
                 </div>
                { postData.length
                    ?
                    <PostList posts={postData} title={"List"}/>
                    :
                    <h1 className={`noPostsPlaceholder noPostsPlaceholder--${(isDarkTheme)? "Dark" : "Light"}`}>
                        Nothing here
                    </h1>
                }
        </div>
    );
};

export default ToDoList;