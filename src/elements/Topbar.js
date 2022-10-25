import styled from "styled-components";
import axios from "axios";
import logo from "../assets/imgs/linkr.svg";
import { DebounceInput } from "react-debounce-input";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [isOpenLogOut, setIsOpenLogOut] = useState(false);
  const [profilePic, setProfilePic] = useState('');
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_URL_PROJECT;

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
    if(name.length > 2){
      const promise = axios.get(`${URL}/seachUser/${name}`);

      promise.then((res) => {
        setProfilePic(res.data[0].pictureUrl);
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
        <BoxUsers>
          {users.map((user, i) => {
            const { id, username, pictureUrl } = user;
            return (
              <li key={i} id = {id} onClick={() => { navigate(`/user/${id}`);setName("") }}>
                <img src={pictureUrl} alt={name} />
                <p>{username}</p>
              </li>
            );
          })}
        </BoxUsers>
      );
    }
    return <BoxUsers></BoxUsers>;
  }

  return (
    <>
      <CONTENT onClick={openLogOut}>
      <img src={logo} alt="" />

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

      <USER>
        {!isOpenLogOut ? <IoIosArrowDown onClick={openLogOut}/> : <IoIosArrowUp onClick={openLogOut}/>}
        <div>
          <img src={profilePic} alt="foto perfil" onClick={openLogOut} />
        </div>
      </USER>
    </CONTENT>
    {isOpenLogOut ? <LogOut>
    <h1 onClick={logOut}>Logout</h1>
    </LogOut> : ''}
    </>
  );
}

const CONTENT = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 28px;
  left: 0;
  top: 0;
  z-index: 1;
  height: 72px;
  width: 100vw;
  background-color: #151515;
  img {
    width: 108px;
    height: 50px;
  }
  div {
    position: relative;
    width: 563px;
    height: 45px;
    input {
      display: flex;
      align-items: center;
      width: 563px;
      height: 45px;
      padding: 14px;

      background-color: #ffffff;
      border-radius: 8px;
      border: none;

      ::placeholder {
        font-family: "Lato", sans-serif;
        display: flex;
        align-items: center;
        font-size: 19px;
        line-height: 23px;
        color: #c6c6c6;
      }
    }
    svg {
      position: absolute;
      right: 15px;
      top: 13px;
      width: 21px;
      height: 21px;
      cursor: pointer;
      color: #c6c6c6;
    }
  }
`;

const BoxUsers = styled.ul`
  border-radius: 8px;
  background: #e7e7e7;
  li {
    width: 563px;
    height: 45px;
    padding: 14px 17px;

    display: flex;
    align-items: center;

    img {
      width: 39px;
      height: 39px;
      margin-right: 14px;
      border-radius: 50%;
    }

    p {
      font-family: "Lato", sans-serif;
      font-size: 17px;
      line-height: 23px;

      color: #515151;
    }
  }
`;

const USER = styled.section`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    color: #ffffff;
  }
  img {
    border-radius: 50%;
    width: 53px;
    height: 53px;
  }
  div {
    border-radius: 50%;
    width: 53px;
    height: 53px;
    background-color: blueviolet;
  }
`;

const LogOut = styled.div`
  background-color: #171717;
  width: 130px;
  height: 47px;
  border-bottom-left-radius: 15px;
  position: fixed;
  right: 0%;

  display: flex;
  justify-content: center;
  align-items: center;

    h1 {
      font-family: "Lato", sans-serif;
      font-size: 17px;
      color: white;
    }
`;
