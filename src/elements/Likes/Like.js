import styled from "styled-components";
import { BsFillHeartFill } from 'react-icons/bs';
function Like() {

    return (
        <StyledDiv>
            <h1><CustomBsFillHeartFill /></h1>
        </StyledDiv>
    )


}
const StyledDiv = styled.div`

    background-color: #FFFFFF;
    margin: 12vw auto;
    width: 200px;
    height: 200px;
    display:flex;
    align-items:center;
    justify-content: center;

`
const CustomBsFillHeartFill = styled(BsFillHeartFill)`

`

export { Like };