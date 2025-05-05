import {createEffect, createEvent, createStore, sample} from "effector";

export function makeDefaultToDoPost() {
    return {title:'', body:''}
}

export const $postData = createStore([]);
export const $post = createStore(makeDefaultToDoPost());
export const $postIDs = createStore([]);

export const postIDsUpdate = createEvent();
export const deletePostIDToPostIDs = createEvent();
export const postTitleChange = createEvent();
export const postBodyChange = createEvent();
export const handleEdit = createEvent();

function transformIDsIntoURL(postIDs){
    return (postIDs.map((post) => `id=${post}`).join("&"));
}

const fetchDataFx = createEffect(async (postIDs) => {
    const url = `https://api.restful-api.dev/objects?${transformIDsIntoURL(postIDs)}`;
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});

$postData.on(fetchDataFx.doneData, (postData, responseData) => { // fail??
    if (!("body" in (responseData[0]?.data || {}))) {
        return [];
    }
    return responseData;
})

$postData.on(fetchDataFx.fail, () => {
    return [];
})

export const addNewPostFx = createEffect((post) => {
    return fetch ('https://api.restful-api.dev/objects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({data: post})
    }).then(response => response.json()).catch(error => error);
})

$post.reset(addNewPostFx.doneData);
$post.on(postTitleChange,(oldPost,newTitle) => ({...oldPost, title: newTitle}));
$post.on(postBodyChange,(oldPost,newBody) => ({...oldPost, body: newBody}));

export const saveEditedPostFx = createEffect(async (post) => {
    return fetch('https://api.restful-api.dev/objects/'+post.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({data: post})
    });
})

$post.reset(saveEditedPostFx.doneData);


$post.on(handleEdit, (_, editedPost) => editedPost);

export const deletePostFx = createEffect(async (postID) => {
    const deletePostURL = "https://api.restful-api.dev/objects/"+postID;

    return fetch(deletePostURL, {
        method: 'DELETE'
    });
})

sample({
    clock:deletePostFx.doneData,
    target:deletePostIDToPostIDs,
})

$postIDs.on(deletePostIDToPostIDs,(postIDs, iDToDelete) => postIDs.filter(p => p !== iDToDelete))

$postIDs.on(addNewPostFx.doneData, (postIDs, newPost) => [...postIDs, newPost.id])

sample({
    clock: $postIDs,
    target: fetchDataFx,
})

sample({
    clock: saveEditedPostFx.doneData,
    source: $postIDs,
    target: fetchDataFx,
})