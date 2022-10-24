
import Post from '../Post.js';
function WorkPlace() {
    //postId receve o id do post
    // token recebe a token do usuário
    return (
        <>
            <Post
                id={1}
                content={"legal demais"}
                link={'https://www.youtube.com/'}
                url={'https://animes.olanerd.com/wp-content/uploads/2022/10/Creative-Chainsaw-Man-Pochita-Jack-o-Lantern-ganha-Halloween.jpg?q=50&fit=contain&w=750&h=&dpr=1.5u'}
                username={'caio teste'}
                userid={1}
            />

        </>
    );


}

export { WorkPlace };