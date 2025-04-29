function transformIDsIntoURL(postIDs){
    return (postIDs.map((post) => `id=${post}`).join("&"));
}

export function fetchData(postIDs) {
    const url = `https://api.restful-api.dev/objects?${transformIDsIntoURL(postIDs)}`;
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
