import React from "react";
import ReactHashtag from "react-hashtag";
import styled from "styled-components";
import {Link} from 'react-router-dom';


export default function ShowHashtag(props){
    const {id, hashtag} = props;
    return (
        <p>
            <ReactHashtag
            renderHashtag = {(idHashtag) => (
                <Link to = {`/hashtag/${id}`} classname = "hastag">
                    <Hashtag> # {idHashtag.slice(1)}</Hashtag>
                </Link>
            )}
            >
                {hashtag}
            </ReactHashtag>
        </p>
    )
}
const Hashtag = styled.span`
    color: white;
    font-weight: 700;
    font-size: 43px;
    font-family: 'Oswald';
`