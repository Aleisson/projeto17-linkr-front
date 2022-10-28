import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Topbar from '../elements/Topbar.js';
import Post from '../elements/Post.js';
import TokenContext from '../contexts/TokenContext.js';
import { useContext } from 'react';
import axios from 'axios';
import routes from '../backendroutes.js';
import styled from 'styled-components';

export default function Hashtag(){

    const [topics, setTopics] = useState([]);
    const {hashtag} = useParams();
    const {token, setToken} = useContext(TokenContext);
   

    useEffect(() => {
        axios.get(routes.GET_HASHTAGS_BY_ID(hashtag))
        .then((res) => {
            setTopics(res.data);
        })
        .catch((error) => {
            if(error.response.status === 404) {
                return alert ("Não foi possível se conectar")
            }
        })
    }, [hashtag, token, setToken]);
    return (
        <Page>
            <Topbar/>
            <Title>#{hashtag}</Title>
            {topics.length !== 0 ? (
                topics.map((hash, index) => (
                    <Post/>
                ))
            ) : (
                <p>"Não foi possível carregar os posts"</p>
            )}    
        </Page>
    );
}

const Title = styled.div`
`;

const Page = styled.div`
`;