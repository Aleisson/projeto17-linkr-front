import { Like } from './Like.js';

function WorkPlace() {
    //postId receve o id do post
    // token recebe a token do usuário
    return (
        <>
            <Like postId={1} token={123}/>
        </>
    );


}

export { WorkPlace };