import React, {useContext} from 'react';
import MySelect from "../UI/select/MySelect";
import PostForm from "../PostForm/PostForm";
import PostList from "../PostList/PostList";
import ThemeContext from "../../Contexts/ThemeContext";
import "./ToDoList.scss";
import {$post, $postData, $postIDs} from "../../utils/todo";
import {useUnit} from "effector-react";

const ToDoList = () => {
    const {isDarkTheme} = useContext(ThemeContext);
    const {$postData:postData,$post:post,$postIDs:postIDs} = useUnit({$postData, $post, $postIDs});

    return (
        <div>
            <PostForm postIDs={postIDs} post={post}/>
                 <hr style={{margin: "15px 0"}}/>
                <div>
                     <MySelect
                         defaultValue= {"Sort by: "}
                         options={[]}
                     />
                 </div>
                { postData.length
                    ?
                    <PostList posts={postData} postIDs={postIDs} title={"List"}/>
                    :
                    <h1 className={`noPostsPlaceholder noPostsPlaceholder--${(isDarkTheme)? "Dark" : "Light"}`}>
                        Nothing here
                    </h1>
                }
        </div>
    );
};

export default ToDoList;