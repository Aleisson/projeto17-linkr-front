import axios from "axios";
const BASE_URL = process.env.REACT_APP_URL_PROJECT;

function deletePost(id) {

    const promise = axios.delete(
        `${BASE_URL}/post/${id}`
    );

    return promise;

}

export { deletePost }