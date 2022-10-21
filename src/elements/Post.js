import styled from "styled-components";

export default function Post({content,link,url,username}){
    return(
        <>
        <CONTENT>
            <LEFT>
                <USERIMAGE src={url}/>
            </LEFT>
            <RIGTH>
                <INFOS>
                    <NAME>{username}</NAME>
                    <DESCRIPTION><p>{content}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p></DESCRIPTION>
                </INFOS>
                <LINK>
                    {link}
                </LINK>
            </RIGTH>
        </CONTENT>
        </>
    );
}

const CONTENT = styled.div`
    display: flex;
    height: 275px;
    width: 100%;
    margin: 0 0 16px 0;
    padding: 18px 18px 18px 18px;
    background-color: #171717;
    border-radius: 15px;
`;
const LEFT = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 14%;
    height: 100%;
    background-color: aqua;
`;
const RIGTH = styled.div`
    width: 86%;
    height: 100%;
    background-color: palegreen;
`;
const LINK = styled.div`
    height: 155px;
    width: 100%;
    background-color: red;
`;
const INFOS = styled.div`
    height: calc(100% - 155px);
    width: 100%;
    background-color: greenyellow;
`;
const NAME = styled.div`
    display: flex;
    align-items: center;
    height: 25px;
    width: 100%;
    background-color: blueviolet;
`;
const DESCRIPTION = styled.div`
    display: flex;
    align-items: center;
    height: calc(100% - 25px);
    width: 100%;
    word-break: break-all;
    background-color: aquamarine;
`;
const USERIMAGE = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 27px;
`;