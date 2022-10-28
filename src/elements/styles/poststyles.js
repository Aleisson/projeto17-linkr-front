import styled from "styled-components";

const CONTENT = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    height: 275px;
    width: 100%;
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
`;
const RIGTH = styled.div`
    width: 86%;
    height: 100%;
`;
const LINK = styled.div`
    display: flex;
    height: 155px;
    width: 100%;
    border: 1px solid #4d4d4d;
    border-radius: 12px;
`;
const INFOS = styled.div`
    height: calc(100% - 155px);
    width: 100%;
`;
const NAME = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 25px;
    width: 100%;
    font-family: 'Lato', sans-serif;
    font-size: 19px;
    color: #FFFFFF;
`;
const DESCRIPTION = styled.div`
    display: flex;
    align-items: center;
    height: calc(100% - 25px);
    width: 100%;
    word-break: break-all;
    font-family: 'Lato', sans-serif;
    color: #b7b7b7;
    font-size: 17px;
`;
const USERIMAGE = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 27px;
    margin-bottom: 20px;
`;
const INFOSLINK = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: calc(100% - 155px);
    height: 100%;
    padding: 20px 20px 20px 20px;
    font-family: 'Lato', sans-serif;
`;
const LOGOSITE = styled.img`
    width: 155px;
    height: 155px;
    border-radius: 0 12px 12px 0;
`;
const TITLE = styled.p`
    color: #cecece;
    font-size: 16px;
`;
const DESC = styled.p`
    color: #9B9595;
    font-size: 11px;
`;
const URL = styled.p`
    color: #cecece;
    font-size: 11px;
`;
const EDIT = styled.div`
    display: flex;
    justify-content: space-between;
    width: 56px;
`;
const CHAT = styled.div`
    margin: 15px auto 0 auto;
    width: auto;
    height: 18%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
    p{
        color: #FFFFFF;
        font-size: 11px;
    }
`;
const DIVCONTENT = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 275px;
    height: fit-content;
    width: 100%;
    margin: 16px 0 0 0;
`;

const COMMENTSBOX = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 16px;
    margin-top: 255px;
    padding: 20px 20px 25px 20px;
    background-color: #1E1E1E;
`;
const COMMENT =styled.div`
    display: flex;
    align-items: center;
    min-height: 70px;
    width: 100%;
    border-bottom: 1px solid #353535;
    font-family: 'Lato', sans-serif;
    div{
        display: flex;
        flex-direction: column;
        width: calc(100% - 50px);
        height: 100%;
        margin-left: 10px;
        padding: 10px 0 10px 0;
        line-height: 15px;
        word-break: break-all;
        em{
            color: #565656;
            font-size: 14px;
        }
        p:first-child{
        color: #f3f3f3;
        font-size: 14px;
        font-weight: bold;
        }
        p:last-child{
        color: #ACACAC;
        font-size: 14px;
        }
    }
`;

const IMGCOMMENT = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

const FORM = styled.form`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    margin: 20px 0 0 0;
`;

const INPUT = styled.input`
    width: calc(100% - 66px);
    height: 100%;
    margin-right: 16px;
    border: none;
    border-radius: 8px;
    color: #575757;
    font-size: 14px;
    font-style: italic;
    background-color: #252525;
    font-family: 'Lato', sans-serif;
    ::placeholder{
        text-indent: 10px;
    }
`;
const BUTTOM = styled.button`
    position: absolute;
    right: 15px;
    bottom: 0;
    z-index: 1;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 8px;
    background-color: #252525;
`;

const STYLES = {
    CONTENT: CONTENT,
    LEFT: LEFT,
    RIGTH: RIGTH,
    LINK: LINK,
    INFOS: INFOS,
    NAME: NAME,
    DESCRIPTION: DESCRIPTION,
    USERIMAGE: USERIMAGE,
    INFOSLINK: INFOSLINK,
    LOGOSITE: LOGOSITE,
    TITLE: TITLE,
    DESC: DESC,
    URL: URL,
    EDIT: EDIT,
    CHAT: CHAT,
    DIVCONTENT: DIVCONTENT,
    COMMENTSBOX: COMMENTSBOX,
    COMMENT: COMMENT,
    IMGCOMMENT: IMGCOMMENT,
    FORM: FORM,
    INPUT: INPUT,
    BUTTOM: BUTTOM
}

export default STYLES;