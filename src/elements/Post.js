import STYLES from "./styles/poststyles.js";
import mql from '@microlink/mql'
import routes from "../backendroutes.js";
import { useContext, useEffect, useState } from "react";
import { Pencil, Trash3Fill, Cursor, ChatDots } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Like } from "./Likes/Like.js";
import { ReactTagify } from "react-tagify";

import { Edit } from './Edit/Edit.js';
import axios from "axios";
import TokenContext from "../contexts/TokenContext.js";
export default function Post({ id, content, link, url, username, userid, index,  handleRemove }) {
    const {token} = useContext(TokenContext);
    const [image, setImage] = useState(Object);
    const [info, setInfo] = useState(Object);
    const [comments,setComments] = useState([]);
    const [writecomment, setWritecomment] = useState("");
    const [update,setUṕdate] = useState(false);
    const [chatopen, setChatopen] = useState(false);
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

    useEffect(()=>{
        axios.get(routes.COMMENTS(id),{ headers: { Authorization: token }})
        .then((res)=>{setComments(res.data)}).catch(err => console.log(err));
    },[update,id,token]);

    function handleForm(e){
        e.preventDefault();
        const objpost = {
            comment: writecomment
        };
        axios.post(routes.COMMENTS(id),objpost,{ headers: { Authorization: token }})
        .then(()=>{setWritecomment("");setUṕdate(!update);}).catch((err)=> console.error(err))
    }

    return (
        <>
            <STYLES.DIVCONTENT>
            <STYLES.CONTENT>
                <STYLES.LEFT>
                    <STYLES.USERIMAGE src={url} onClick={() => { navigate(`/user/${userid}`) }} />
                    <Like postId={id} userId={userid} />
                    <STYLES.CHAT>
                        <ChatDots size={25} color="#FFFFFF" onClick={()=>{setChatopen(!chatopen)}}/>
                        <p>{comments.length} comments</p>
                    </STYLES.CHAT>
                </STYLES.LEFT>
                <STYLES.RIGTH>
                    <STYLES.INFOS>
                        <STYLES.NAME>
                            <p onClick={() => { navigate(`/user/${userid}`) }}>{username}</p>
                            <STYLES.EDIT>
                                <Pencil onClick={() => { changeEdit(!isEditing) }} size={23} color="#FFFFFF" />
                                <Trash3Fill onClick={() => handleRemove(index, id)} size={23} color="#FFFFFF" />
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
                                    tagClicked={(tag) => {navigate(`/hashtag/${tag.slice(1)}`)}}
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
            {chatopen?
            <STYLES.COMMENTSBOX>
                {comments.length>0?
                comments.map((item,index)=>{return <STYLES.COMMENT key={index}>
                    <STYLES.IMGCOMMENT src={item.pictureUrl}/>
                    <div>
                        {item.userId===userid?<p>{item.username}<em>  •  post's author</em></p>:<p>{item.username}</p>}
                        <p>{item.comment}</p>
                    </div>
                </STYLES.COMMENT>})
                :null}
            <STYLES.FORM onSubmit={handleForm}>
                <STYLES.IMGCOMMENT src={url}/>
                <STYLES.INPUT 
                value={writecomment}
                onChange={(e) => setWritecomment(e.target.value)}
                type="text"
                placeholder="write a comment..."
                required
                />
                <STYLES.BUTTOM type="submit">
                    <Cursor size={16} color="#FFFFFF"/>
                </STYLES.BUTTOM>
            </STYLES.FORM>
        </STYLES.COMMENTSBOX>
            :null}
            </STYLES.DIVCONTENT>
        </>
    );
}

const tagStyle = {
    color: "#FFFFFF",
    margin: "0px 2px",
    cursor: "pointer",
};