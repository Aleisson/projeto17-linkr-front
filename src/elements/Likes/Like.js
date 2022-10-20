import styled from "styled-components";
import { useState } from "react";
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';
function Like() {

    function GiveLike({ button }) {
        if (button) {
            return <CustomBsFillHeart  />
        }
        return <CustomBsHeart />

    }

    const [button, setButton] = useState(false);

    return (

        <StyledDiv onClick={() => setButton((button => !button))}>

            <GiveLike button={button} />

        </StyledDiv>
    )


}
const StyledDiv = styled.div`

    //background-color: #FF16;
    margin: 12vw auto;
    width: 32px;
    height: auto;
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