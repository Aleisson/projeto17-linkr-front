const backend = process.env.REACT_APP_URL_PROJECT;

const routes = {
    GET_POSTS: `${backend}/publish`,
    INSERT_POST: `${backend}/publish`,
    SIGN_UP: `${backend}/signup`,
    SIGN_IN: `${backend}/signin`,
    GET_POSTS_BYID: (id)=>{return `${backend}/getposts/${id}`
    }
}
export default routes;