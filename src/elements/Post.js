import STYLES from "./styles/poststyles.js";
import mql from '@microlink/mql'
import { useEffect, useState } from "react";
import { Pencil, Trash3Fill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Like } from "./Likes/Like.js";
import { ReactTagify } from "react-tagify";

import { Edit } from './Edit/Edit.js';
export default function Post({ id, content, link, url, username, userid }) {
    const [image, setImage] = useState(Object);
    const [info, setInfo] = useState(Object);
    const navigate = useNavigate();
    const [isEditing, setEditing] = useState(false);
    //const topics = getHashtagsInPost(setInfo);
    //Maria Clara : eu não entendi como as informações do post dentro da descrição estão sendo enviadas, pensei em colocar no UseEffec dentro do setinfo o topic, mas não faz sentido, não sei como implementar essa parte. 
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    function changeEdit(isEditing) {
        setEditing(isEditing)
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
                                <Pencil onClick={() => { changeEdit(!isEditing) }} size={23} color="#FFFFFF" />
                                <Trash3Fill size={23} color="#FFFFFF" />
                            </STYLES.EDIT>
                        </STYLES.NAME>

                        <STYLES.DESCRIPTION><Edit
                            id={id}
                            userId={userid}
                            content={content}
                            isEditing={isEditing}
                            changeEdit={changeEdit} />
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