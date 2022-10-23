import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { CustomBsFillHeart, CustomBsHeart, StyledDiv } from './style/like.Style.js';
import * as services from '../../services/linkr.Services.js';

function Like({ postId, token }) {

    const [button, setButton] = useState(false);
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);

    useEffect(() => {

        const promiseCount = services.getCountLikes(1);
        promiseCount.then(res => setCount(res.data));
        const promiseUsers = services.getLikesUsers(1);
        promiseUsers.then(res => {
            if (res.data.lenght < 2) {
                return setUsers(res.data);
            }
            return setUsers(res.data.slice(0, 2));
        });

    }, [])



    function GiveLike({ button, postId, token }) {
        if (button) {

            return <CustomBsFillHeart onClick={() => {
                const promise = services.deleteLike(postId, token);
                promise.catch((error) => console.error(error));
                setCount(count - 1);
                setButton(false);
            }} />
        }

        return <CustomBsHeart onClick={() => {
            const promise = services.postLike(postId, token);
            promise.catch((error) => console.error(error));
            setCount(count + 1);
            setButton(true);
        }} />
    }

    function CountLike({ countLike, usersLike }) {

        return <>
            <TextLike data-tip data-for="registerTip" >
                {`${countLike} `} Likes
            </TextLike>
            <ReactTooltip
                id="registerTip"
                place="bottom"
                effect="solid"
                backgroundColor="#FFFFFF"
                textColor="#000000">
                {`${users} e outras ${(count - 2) > 0 ? count - 2 : count} pessoas`}
            </ReactTooltip>
        </>
    }


    return (

        <StyledDiv >

            <GiveLike button={button} postId={1} token={123} />
            <CountLike countLike={count}></CountLike>



        </StyledDiv>
    )


}

const TextLike = styled.p`

    font-family: 'Lato', sans-serif;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 13px;
    text-align: center;
    color: #FFFFFF;
`


export { Like };