const backend = "http://localhost:4000";

const routes = {
    GET_POSTS: `${backend}/publish`,
    INSERT_POST: `${backend}/publish`,
    GET_POSTS_BYID: (id)=>{return `${backend}/getposts/${id}`}
}
export default routes;