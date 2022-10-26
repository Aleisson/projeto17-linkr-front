import STYLES from "./styles/poststyles.js";
import mql from '@microlink/mql'
import { useEffect, useState } from "react";
import { Pencil, Trash3Fill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Like } from "./Likes/Like.js";

export default function Post({ id, content, link, url, username, userid }) {
    const [image, setImage] = useState(Object);
    const [info, setInfo] = useState(Object);
    const navigate = useNavigate();
    //const topics = getHashtagsInPost(setInfo);
    //Maria Clara : eu não entendi como as informações do post dentro da descrição estão sendo enviadas, pensei em colocar no UseEffec dentro do setinfo o topic, mas não faz sentido, não sei como implementar essa parte. 
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

    // function getHashtagsInPost(descriptionText){
    //     hashtagFeature = /(?:^|\s)(?:#)([a-zA-z\d]+)/gm; //identifica o que é dentro da description o que é a parte da hashtag. 
    //     let topics = [];
    //     let check;
    //     while(check = hashtagFeature.exc(descriptionText)){
    //         topics.push(check[1]);
    //     }
    //     return topics;
    // }




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
<<<<<<< HEAD
                            </EDIT>
                        </NAME>
                        <DESCRIPTION>{content}</DESCRIPTION>
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
=======
                            </STYLES.EDIT>
                        </STYLES.NAME>
                        <STYLES.DESCRIPTION><p>{content}</p></STYLES.DESCRIPTION>
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
>>>>>>> 78657dc6000981cdcd96dd0aca4374e6d8926ce0
        </>
    );
}