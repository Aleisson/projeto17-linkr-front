import styled from "styled-components";
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';

const StyledDiv = styled.div`

    background-color: grey;
    margin: 12vw auto;
    width: auto;
    height: 12vw;
    padding: 64px 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-around;

`


const CustomBsHeart = styled(BsHeart)`
    font-size: 32px;
    color: white;
`
const CustomBsFillHeart = styled(BsFillHeartFill)`
    color: #AC0000;
    font-size: 32px;
`

export {
    StyledDiv,
    CustomBsHeart,
    CustomBsFillHeart
};