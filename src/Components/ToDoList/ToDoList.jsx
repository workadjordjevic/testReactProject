import React, {useContext, useEffect, useState} from 'react';
import MySelect from "../UI/select/MySelect";
import PostForm from "../PostForm/PostForm";
import PostList from "../PostList/PostList";
import ThemeContext from "../../Contexts/ThemeContext";
import "./ToDoList.scss";

const ToDoList = () => {
    const {isDarkTheme} = useContext(ThemeContext);
    const [postData, setPostData] = useState([]);
    const [postIDs, setPostIDs] = useState([]);

     function transformIDsIntoURL(postIDs){
         return (postIDs.map((post) => `id=${post}`).join("&"));
     }

    function fetchData() {
        const url = `https://api.restful-api.dev/objects?${transformIDsIntoURL(postIDs)}`;
        return fetch(url)
            .then(response => response.json())
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }

    async function receivePostData() {
        const requestResult = await fetchData();

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
            <PostForm setPostIDs={setPostIDs} postIDs={postIDs}/>
                 <hr style={{margin: "15px 0"}}/>
                <div>
                     <MySelect
                         defaultValue= {"Sort by: "}
                         options={[]}
                     />
                 </div>
                { postData.length
                    ?
                    <PostList posts={postData} postIDs={postIDs} setPostIDs={setPostIDs} title={"List"} />
                    :
                    <h1 className={`noPostsPlaceholder noPostsPlaceholder--${(isDarkTheme)? "Dark" : "Light"}`}>
                        Nothing here
                    </h1>
                }
        </div>
    );
};

export default ToDoList;