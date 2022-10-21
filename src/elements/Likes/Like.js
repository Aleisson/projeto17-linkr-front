import styled from "styled-components";
import { useState } from "react";
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';
import * as services from '../../services/linkr.Services.js';

function Like() {

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

    const [button, setButton] = useState(false);

    return (

        <StyledDiv >

            <GiveLike button={button} postId={1} token={'token'} />

        </StyledDiv>
    )


}
const StyledDiv = styled.div`

    background-color: grey;
    margin: 12vw auto;
    width: auto;
    height: 12vw;
    display:flex;
    align-items:center;
    justify-content: center;

`


const CustomBsHeart = styled(BsHeart)`
    font-size: 32px;
    color: white;
`
const CustomBsFillHeart = styled(BsFillHeartFill)`
    color: #AC0000;
    font-size: 32px;
`

export { Like };