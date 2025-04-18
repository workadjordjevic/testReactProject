import React, {useContext, useEffect, useState} from 'react';
import MySelect from "../UI/select/MySelect";
import PostForm from "../PostForm/PostForm";
import PostList from "../PostList/PostList";
import ThemeContext from "../../Contexts/ThemeContext";
import "./ToDoList.scss";

const ToDoList = () => {
    const [posts,setPosts] = useState([{id:1, title:"Title", body:"Description"}]);
    const {isDarkTheme} = useContext(ThemeContext);
    const [postData, setPostData] = useState([]);
    const [postIDs, setPostIDs] = useState([]);

     function transformIDsIntoURL(postIDs){
         let iDsIntoURL;
         if (postIDs.length >1) {
             iDsIntoURL = (postIDs.map((post) => `id=${post}&`).join(""));
         }
         else {
             iDsIntoURL = `id=${postIDs[0]}`;
         }
         return iDsIntoURL;
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

        if (typeof (requestResult) === "undefined" || typeof (requestResult[0]) === "undefined") {
            return;
        }
        if ("body" in requestResult[0].data) {
            setPostData([...requestResult]);
        }
    }

    useEffect(() => {
        receivePostData();
    },[postIDs])

    console.log("postData",postData,"postData len= ",postData.length);

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