import React, {useContext} from 'react';
import PostItem from "../PostItem/PostItem";
import "./PostList.scss";
import ThemeContext from "../../Contexts/ThemeContext";

const PostList = ({posts ,title}) => {

    const {isDarkTheme} = useContext(ThemeContext);
    return (
        <div>
            <h1 className={`title title--${(isDarkTheme)? "Dark" : "Light"}`} > {title} </h1>
            {   posts.map((post, index)=>
                <PostItem number={index + 1} id={post.id} post={post.data} key={post.id}/>)
            }
        </div>
    );
};

export default PostList;