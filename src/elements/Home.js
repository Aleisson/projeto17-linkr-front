import styled from "styled-components";
import Post from "./Post";
import Topbar from "./Topbar";
import Trending from "./Trending";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
import { useContext, useEffect, useState } from "react";
import routes from "../backendroutes";
import { useParams } from "react-router-dom";

export default function Home() {
    const { token } = useContext(TokenContext);
    const id = useParams().id;
    const [posts, setPosts] = useState([]);
    const [inserturl, setInserturl] = useState("");
    const [insertdesc, setInsertdesc] = useState("");
    const [userimage, setUserimage] = useState(""); //precisa pegar a url da imagem do usuario atual
    useEffect(() => {
        if (id) {
            axios.get(routes.GET_POSTS_BYID(id), { headers: { Authorization: token } }).then((res) => { setPosts(res.data) })
                .catch((err) => { console.error(err) });
        } else {
            axios.get(routes.GET_POSTS, { headers: { Authorization: token } }).then((res) => { setPosts(res.data) })
                .catch((err) => { console.error(err) });
        }
    });
    function handleForm(e) {
        e.preventDefault();
        const senddata = {
            url: inserturl,
            complement: insertdesc
        }
        axios.post(routes.INSERT_POST, senddata, { headers: { Authorization: token } }).catch((err) => { console.error(err); if (err.request.status === 422) { alert("Url inválida") } });
    }

    return (
        <>
            <Topbar />
            <CONTENT>
                <TOPTIMELINE>
                    {posts.length > 0 && id ? `${posts[0].username}'s posts` : 'timeline'}
                </TOPTIMELINE>
                <TIMELINE>
                    <POSTS>
                        {id ? null : <INSERTPOST>
                            <LEFTPOST>
                                <USERIMAGE src={userimage} />
                            </LEFTPOST>
                            <RIGTHPOST>
                                <INSERTPOSTMESSAGE>What are you going to share today?</INSERTPOSTMESSAGE>
                                <FORM onSubmit={handleForm}>
                                    <INPUT h="30px"
                                        value={inserturl}
                                        onChange={(e) => setInserturl(e.target.value)}
                                        type="text"
                                        placeholder="http://..."
                                        required
                                    />
                                    <INPUT h="66px"
                                        value={insertdesc}
                                        onChange={(e) => setInsertdesc(e.target.value)}
                                        type="text"
                                        placeholder="Awesome article about #javascript"
                                        required
                                    />
                                    <BUTTON type="submit">Confirmar</BUTTON>
                                </FORM>
                            </RIGTHPOST>
                        </INSERTPOST>}
                        {posts.map((item, index) => { return <Post key={index} id={item.id} content={item.content} link={item.link} url={item.pictureUrl} username={item.username} userid={item.userId} /> })}
                    </POSTS>
                    <Trending />
                </TIMELINE>
            </CONTENT>
        </>
    );
}

const CONTENT = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: calc(100vh - 72px);
    height: fit-content;
    margin-top: 72px;
    padding: 0 16.66% 0 16.66%;
`;
const TOPTIMELINE = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 160px;
    width: 100%;
    font-family: 'Oswald', sans-serif;
    font-size: 43px;
    font-weight: bold;
    color: #FFFFFF;
`;
const TIMELINE = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
`;

const POSTS = styled.div`
    display: flex;
    flex-direction: column;
    width: 64%;
    height: fit-content;
`;
const INSERTPOST = styled.div`
    display: flex;
    height: 210px;
    width: 100%;
    margin: 0 0 30px 0;
    padding: 18px 18px 18px 18px;
    background-color: #FFFFFF;
    border-radius: 15px;
`;
const LEFTPOST = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 14%;
    height: 100%;
`;
const RIGTHPOST = styled.div`
    width: 86%;
    height: 100%;
`;
const USERIMAGE = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 27px;
    margin-bottom: 20px;
`;
const INSERTPOSTMESSAGE = styled.div`
    display: flex;
    height: 40px;
    width: 100%;
    padding-top: 10px;
    font-family: 'Lato', sans-serif;
    font-weight: lighter;
    font-size: 20px;
    color: #707070;
`;
const FORM = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: calc(100% -55px);
    width: 100%;
`;
const INPUT = styled.input`
    width: 100%;
    height: ${props => props.h};
    margin-bottom: 5px;
    padding-left: 10px;
    background-color: #EFEFEF;
    border: none;
    border-radius: 5px;
    ::placeholder{
        font-family: 'Lato', sans-serif;
        font-weight: lighter;
        font-size: 15px;
        color: #949494;
    }
`;
const BUTTON = styled.button`
    height: 31px;
    width: 112px;
    background-color: #1877F2;
    border-radius: 5px;
    border: none;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 14px;
    color: #FFFFFF;
`;