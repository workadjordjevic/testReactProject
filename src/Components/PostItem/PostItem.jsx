import React, {useContext} from 'react';
import CustomButton from "../UI/CustomButton/CustomButton";
import "./PostItem.scss"
import ThemeContext from "../../Contexts/ThemeContext";

const PostItem = (props) => {
    const {isDarkTheme} = useContext(ThemeContext);
    return (
        <div className={`post post--${(isDarkTheme)? "Dark" : "Light"}`}>
            <div className={`post__item post__item--${(isDarkTheme)? "Dark" : "Light"}`}>
                <strong> {props.number}.{props.post.title} </strong>
                <div> {props.post.body} </div>
            </div>
            <div className="post__btns">
                <CustomButton  id="deleteButton" text="Delete" size="small" variant="primary"  onClick={() => props.remove(props.post)}/>
            </div>
        </div>
    );
};

export default PostItem;