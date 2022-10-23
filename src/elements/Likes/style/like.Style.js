import styled from "styled-components";
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';

const StyledDiv = styled.div`

    //background-color: grey;
    margin: 0 auto;
    width: auto;
    height: 20%;
    //padding: 64px 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;

`


const CustomBsHeart = styled(BsHeart)`
    font-size: 24px;
    color: white;
`
const CustomBsFillHeart = styled(BsFillHeartFill)`
    color: #AC0000;
    font-size: 24px;
`

const TextLike = styled.p`

    font-family: 'Lato', sans-serif;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    text-align: center;
    color: #FFFFFF;
`

export {
    StyledDiv,
    CustomBsHeart,
    CustomBsFillHeart,
    TextLike
};