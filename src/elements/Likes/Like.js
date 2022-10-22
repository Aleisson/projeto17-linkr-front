import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { CustomBsFillHeart, CustomBsHeart, StyledDiv } from './style/like.Style.js';
import * as services from '../../services/linkr.Services.js';

function Like() {

    const [button, setButton] = useState(false);
    const [count, setCount] = useState(14);

    function GiveLike({ button, postId, token }) {
        if (button) {
            const promise = services.postLike(postId, token);
            promise.catch((error) => console.error(error));
            return <CustomBsFillHeart onClick={() => setButton((button => !button))} />
        }
        const promise = services.deleteLike(postId, token);
        promise.catch((error) => console.error(error));
        return <CustomBsHeart onClick={() => setButton((button => !button))} />
    }

    function CountLike({ countLike, usersLike }) {

        return <>
            <TextLike data-tip data-for="registerTip" >
                {`${countLike} `} Likes
            </TextLike>
            <ReactTooltip
                id="registerTip"
                place="bottom"
                effect="solid"
                backgroundColor="#FFFFFF"
                textColor="#000000">
                João, jose e mais 11 curtiram
            </ReactTooltip>
        </>
    }


    return (

        <StyledDiv >

            <GiveLike button={button} postId={1} token={'token'} />
            <CountLike countLike={count}></CountLike>



        </StyledDiv>
    )


}

const TextLike = styled.p`

    font-family: 'Lato', sans-serif;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 13px;
    text-align: center;
    color: #FFFFFF;
`


export { Like };