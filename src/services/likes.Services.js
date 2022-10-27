import axios from "axios";
const BASE_URL = process.env.REACT_APP_URL_PROJECT;

function postLike(postId, userId) {

    const promise = axios.post(
        `${BASE_URL}/like/${postId}/user/${userId}`,
        {},
    );
    return promise;
}

function deleteLike(postId, userId) {

    const promise = axios.delete(
        `${BASE_URL}/like/${postId}/user/${userId}`,
    );
    return promise;
}


 function getLikesMe(postId, userId) {
    const promise = axios.get(
        `${BASE_URL}/like/${postId}/user/${userId}`,

    );
    return promise;
}

function getLikesUsers(postId) {

    const promise = axios.get(
        `${BASE_URL}/like/${postId}/users`
    );
    return promise;
}

function getCountLikes(postId) {

    const promise = axios.get(
        `${BASE_URL}/like/${postId}/count`
    );
    return promise;
}




export {
    postLike,
    deleteLike,
    getLikesMe,
    getLikesUsers,
    getCountLikes
}