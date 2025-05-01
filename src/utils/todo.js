import {createEffect, createEvent, createStore, sample} from "effector";

export function makeDefaultToDoPost() {
    return {title:'', body:''}
}

export const $postData = createStore([]);
export const $post = createStore(makeDefaultToDoPost());

export const postIDsUpdate = createEvent();
export const refetchPostList = createEvent();

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

sample({
    clock: postIDsUpdate,
    // filter: (postIDs) => !!postIDs.length,
    target: fetchDataFx,
})

sample({
    clock: refetchPostList,
    target: fetchDataFx,
})

export const addNewPostFx = createEffect((post) => {
    return fetch ('https://api.restful-api.dev/objects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({data: post})
    })
})

export const saveEditedPostFx = createEffect(async (post) => {
    return fetch('https://api.restful-api.dev/objects/'+post.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({data: post})
    });
})
// $postData.on(addNewPostFx.doneData, async(postData, response) => {
//     setPost({title:"", body:""});
//     const newPost = await response.json();
//     setPostIDs([...postIDs, newPost.id]);
// })


// async function addNewPost(e) {
//     e.preventDefault();
//     const addNewPostRequest = await fetch('https://api.restful-api.dev/objects', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify({data: post})
//     });
//
//     setPost({title:"", body:""});
//
//     const newPost = await addNewPostRequest.json();
//     setPostIDs([...postIDs, newPost.id]);
// }