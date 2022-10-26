import STYLES from "./styles/homestyles";
import { useEffect } from "react";
import { useState } from "react";
 
function ButtonFollowUnfollow() {
const [follow, setUnfollow] = useState(false);
    
    useEffect(() => {

    },[]);
    return (
        <STYLES.BUTTONFOLLOW onClick={()=> setUnfollow(!follow)}>
          {!follow ? "Follow" : "Unfollow"}
        </STYLES.BUTTONFOLLOW>
      );
}

export default ButtonFollowUnfollow;