import styled from "styled-components";
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';
function Like() {

    return (
        <StyledDiv>
            <h1><CustomBsFillHeart /></h1>
            <h1><CustomBsHeart /></h1>
        </StyledDiv>
    )


}
const StyledDiv = styled.div`

    //background-color: #FFFFFF;
    margin: 12vw auto;
    width: 200px;
    height: 200px;
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