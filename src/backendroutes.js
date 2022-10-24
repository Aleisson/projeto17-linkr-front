const backend = "https://deploy-backend-linkr.herokuapp.com/";

const routes = {
    GET_POSTS: `${backend}/publish`,
    INSERT_POST: `${backend}/publish`,
    SIGN_UP: `${backend}/signup`,
    SIGN_IN: `${backend}/signin`,
    GET_HASHTAGS: `${backend}/hashtags`,
    SEARCH_USER_BY_NAME: (name)=>{return `${backend}/seachUser/${name}`},
    GET_POSTS_BYID: (id)=>{return `${backend}/getposts/${id}`
    
    }
}
export default routes;