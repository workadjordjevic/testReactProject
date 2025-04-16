import React, {useContext} from 'react';
import PostItem from "../PostItem/PostItem";
import "./PostList.scss";
import ThemeContext from "../../Contexts/ThemeContext";

const PostList = ({posts ,title ,remove}) => {
    const {isDarkTheme} = useContext(ThemeContext);
    return (
        <div>
            <h1 className={`title title--${(isDarkTheme)? "Dark" : "Light"}`} > {title} </h1>
            {posts.map((post, index)=>
                <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;