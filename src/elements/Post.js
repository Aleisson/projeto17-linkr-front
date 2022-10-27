import STYLES from "./styles/poststyles.js";
import mql from '@microlink/mql'
import { useEffect, useState } from "react";
import { Pencil, Trash3Fill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Like } from "./Likes/Like.js";
import { ReactTagify } from "react-tagify";

export default function Post({ id, content, link, url, username, userid }) {
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
            <STYLES.CONTENT>
                <STYLES.LEFT>
                    <STYLES.USERIMAGE src={url} onClick={() => { navigate(`/user/${userid}`) }} />
                    <Like postId={id} userId={userid} />
                </STYLES.LEFT>
                <STYLES.RIGTH>
                    <STYLES.INFOS>
                        <STYLES.NAME>
                            <p onClick={() => { navigate(`/user/${userid}`) }}>{username}</p>
                            <STYLES.EDIT>
                                <Pencil size={23} color="#FFFFFF" />
                                <Trash3Fill size={23} color="#FFFFFF" />
                            </STYLES.EDIT>
                        </STYLES.NAME>
                        <STYLES.DESCRIPTION>
                            <p>
                                <ReactTagify
                                    tagStyle={tagStyle}
                                    tagClick={(tag) => navigate(`/hashtag/${tag.slice(1)}`)}
                                >
                                    {content}
                                </ReactTagify>
                            </p>
                        </STYLES.DESCRIPTION>
                    </STYLES.INFOS>
                    <STYLES.LINK onClick={() => { openInNewTab(link) }}>
                        <STYLES.INFOSLINK>
                            <STYLES.TITLE>{info.title}</STYLES.TITLE>
                            <STYLES.DESC>{info.description}</STYLES.DESC>
                            <STYLES.URL>{info.url}</STYLES.URL>
                        </STYLES.INFOSLINK>
                        <STYLES.LOGOSITE alt="logo" src={image.url} />
                    </STYLES.LINK>
                </STYLES.RIGTH>
            </STYLES.CONTENT>
            
        </>
    );
}

const tagStyle = {
    color: "#FFFFFF",
    margin: "0px 2px",
    cursor: "pointer",
};