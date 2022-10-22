import { useState, useEffect } from "react";
import { CustomBsFillHeart, CustomBsHeart, StyledDiv } from './style/like.Style.js';
import * as services from '../../services/linkr.Services.js';

function Like() {

    function GiveLike({ button, postId, token }) {
        if (button) {
            const promise = services.postLike(postId, token);
            promise.catch((error) => console.error(error));
            return <CustomBsFillHeart onClick={() => setButton((button => !button))} />
        }
        const promise = services.deleteLike(postId, token);
        promise.catch((error) => console.error(error));
        return <CustomBsHeart onClick={() => setButton((button => !button))} />
    }

    

    const [button, setButton] = useState(false);

    return (

        <StyledDiv >

            <GiveLike button={button} postId={1} token={'token'} />

        </StyledDiv>
    )


}

export { Like };