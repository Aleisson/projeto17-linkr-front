import styled from "styled-components";
import {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {ReactTagify as Hashtag} from 'react-tagify';
import routes from "../backendroutes";

export default function Trending(){
    const [topics, setTopics] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        axios.get(routes.GET_HASHTAGS)
        .then(res => {
            setTopics(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    function navigateHashtag(topic){
        const trendingTopics = topic.replace("#", "");
        navigate(`/hashtag/${trendingTopics}`);
    }


    return (
        <>
        <CONTENT>
            <Title>Trending</Title>

            <Box>
                {topics.length>0 ?
                topics.map((item, index) => 
                <Hashtag key = {item.topicId} topicClick = {topic => navigateHashtag(topic)}>
                    {`#${item.name}`}
                </Hashtag>
                ) : "No hashtag found"}
            </Box>
        </CONTENT>
        </>
    );
}

const CONTENT = styled.div`
    box-sizing: border-box;
    padding: 20px 15px;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
    background-color: #171717;
    @media(max-width: 670px){
        margin-top: 0px;
        overflow: visible;
    }
`;
const Title = styled.div`
color: white;
font-family: 'Oswald';
font-weight: bold;
width: 100%;
font-size: 27px;
`
const Box = styled.div`
color: white;
font-family: 'Lato';
font-weight: bold;
display: flex;
flex-direction: column;
gap: 12px;
`
