import axios from "axios";
import { filterToken } from "./services.Helper.js";
const BASE_URL = process.env.REACT_APP_URL_PROJECT;

function postLike(postId, token) {

    const promise = axios.post(
        `${BASE_URL}/like/${postId}`,
        {},
        filterToken(token));
    return promise;
}

function deleteLike(postId, token) {

    const promise = axios.delete(
        `${BASE_URL}/like/${postId}`,
        filterToken(token));
    return promise;
}


export {
    postLike,
    deleteLike
}