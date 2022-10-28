import styled from "styled-components";
import {useEffect, useState, useContext} from 'react';
//import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TokenContex from "../contexts/TokenContext.js";
import routes from "../backendroutes";

export default function Trending(){
    const {setToken} = useContext(TokenContex)
    const [topics, setTopics] = useState([]);
    const navigate = useNavigate();
    

    useEffect( () => {
        axios.get(routes.GET_HASHTAGS)
        .then((res) => {
            setTopics(res.data);
        })
        .catch((error) => {
            if(error.response.status === 500){
                return alert ("Não foi possível se conectar")
            }
        });
    }, [setToken]);
 
    //
    return (    
        <CONTENT>
            <Title>Trending</Title>

            <Box>
                {topics.length > 0 ? (
                    topics.map((topic, index) => (
                        <p key={index} onClick= {() => {navigate(`/hashtag/${topic.id}`
                        )}}>
                            <h2> # {topic.name}</h2>
                            </p>
                    ))
                ) : (<h2>Não há tópicos ainda</h2>)}
            </Box>
        </CONTENT>
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
