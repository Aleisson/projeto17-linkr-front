import styled from "styled-components";

export default function Topbar(){
    return (
        <>
        <CONTENT/>
        </>
    );
}

const CONTENT = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    height: 72px;
    width: 100vw;
    background-color: #151515;
`;