import axios from "axios";

const BASE_URL = process.env.REACT_APP_URL_PROJECT;

function postLike(postId, token) {
    console.log(`toke: ${token}`);
    const promise = axios.post(`${BASE_URL}/like/${postId}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
    })
    return promise;
}

export {
    postLike,
}