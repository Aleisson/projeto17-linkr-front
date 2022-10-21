import styled from "styled-components";
import Post from "./Post";
import Topbar from "./Topbar";
import Trending from "./Trending";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
import { useContext, useEffect, useState } from "react";
import routes from "../backendroutes";

export default function Home(){
    const {token} = useContext(TokenContext);
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        axios.get(routes.GET_POSTS, {headers: { Authorization: token }}).then((res)=>{setPosts(res.data)})
        .catch((err)=>{console.error(err)});
    });

    return (
        <>
        <Topbar/>
        <CONTENT>
            <TOPTIMELINE>
                timeline
            </TOPTIMELINE>
            <TIMELINE>
                <POSTS>
                    {posts.map((item,index)=>{return <Post key={index} content={item.content} link={item.link} url={item.pictureUrl} username={item.username}/>})}
                </POSTS>
                <Trending/>
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