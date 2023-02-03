import axios from "axios";
const BASE_URL = process.env.REACT_APP_URL_PROJECT;

function editPost(id, userId, content) {

    const promise = axios.put(
        `${BASE_URL}/post/${id}`,
        { userId, content },
    );

    return promise;

}

export { editPost }