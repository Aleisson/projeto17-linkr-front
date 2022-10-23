import styled from "styled-components";
import mql from '@microlink/mql'
import { useEffect, useState } from "react";
import { Pencil, Trash3Fill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Like } from "./Likes/Like.js";

export default function Post({ id, content, link, url, username, userid}) {
    const [image, setImage] = useState(Object);
    const [info, setInfo] = useState(Object);
    const navigate = useNavigate();
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    useEffect(() => {
        mql(link).then((res) => {
            setImage(res.data.logo)
            setInfo({
                title: res.data.title,
                description: res.data.description,
                url: res.data.url
            });
        }).catch((err) => { console.error(err) });
    }, [link]);
    return (
        <>
            <CONTENT>
                <LEFT>
                    <USERIMAGE src={url} onClick={() => { navigate(`/user/${userid}`) }} />
                    <Like postId={id}/>
                </LEFT>
                <RIGTH>
                    <INFOS>
                        <NAME>
                            <p onClick={() => { navigate(`/user/${userid}`) }}>{username}</p>
                            <EDIT>
                                <Pencil size={23} color="#FFFFFF" />
                                <Trash3Fill size={23} color="#FFFFFF" />
                            </EDIT>
                        </NAME>
                        <DESCRIPTION><p>{content}</p></DESCRIPTION>
                    </INFOS>
                    <LINK onClick={() => { openInNewTab(link) }}>
                        <INFOSLINK>
                            <TITLE>{info.title}</TITLE>
                            <DESC>{info.description}</DESC>
                            <URL>{info.url}</URL>
                        </INFOSLINK>
                        <LOGOSITE alt="logo" src={image.url} />
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