import STYLES from "./styles/topbarstyles";
import axios from "axios";
import logo from "../assets/imgs/linkr.svg";
import { DebounceInput } from "react-debounce-input";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../contexts/TokenContext";
import routes from "../backendroutes";

export default function Topbar() {
  const {token} = useContext(TokenContext);
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [isOpenLogOut, setIsOpenLogOut] = useState(false);
  const [profilePic, setProfilePic] = useState('');
  const navigate = useNavigate();
  
  function openLogOut () {
   if (isOpenLogOut) {
    setIsOpenLogOut(false)
   } else {
    setIsOpenLogOut(true)
   }
  }

  function logOut () {
    openLogOut()
    localStorage.clear();
    navigate("/")
  }
  useEffect(() => {
    if(token){
      axios.get(routes.GET_POSTS, {headers: { Authorization: token }}).then((res)=>{setProfilePic(res.data.user[0].pictureUrl)})
      .catch((err)=>{console.error(err)});
    }
 },[token]);
  useEffect(() => {
    if(name.length > 2){
      const promise = axios.get(routes.SEARCH_USER_BY_NAME(name));

      promise.then((res) => {
        setUsers(res.data);
        ReturnListUsers();
      });

      promise.catch((err) => {
        console.log(err.response.data);
      });
    }

  }, [name]);

  function ReturnListUsers() {
    if (name.length > 2) {
      return (
        <STYLES.BoxUsers>
          {users.map((user, i) => {
            const { id, username, pictureUrl } = user;
            return (
              <li key={i} id = {id} onClick={() => { navigate(`/user/${id}`);setName("") }}>
                <img src={pictureUrl} alt={name} />
                <p>{username}</p>
              </li>
            );
          })}
        </STYLES.BoxUsers>
      );
    }
    return <STYLES.BoxUsers></STYLES.BoxUsers>;
  }

  return (
    <>
      <STYLES.CONTENT>
      <img src={logo} alt="" onClick={()=>{navigate("/timeline")}}/>

      <div>
        <DebounceInput
          value={name}
          type="text"
          placeholder="Search for people..."
          user="user"
          minLength={3}
          debounceTimeout={300}
          onChange={(e) => setName(e.target.value)}
        />
        <GoSearch />
        {users.length > 0 ? <ReturnListUsers /> : ""}
      </div>

      <STYLES.USER onClick={openLogOut}>
        {!isOpenLogOut ? <IoIosArrowDown onClick={openLogOut}/> : <IoIosArrowUp onClick={openLogOut}/>}
        <div>
          <img src={profilePic} alt="foto perfil" onClick={openLogOut} />
        </div>
      </STYLES.USER>
    </STYLES.CONTENT>
    {isOpenLogOut ? <STYLES.LogOut>
    <h1 onClick={logOut}>Logout</h1>
    </STYLES.LogOut> : ''}
    </>
  );
}