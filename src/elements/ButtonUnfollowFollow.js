import styled from "styled-components";
import { useEffect, useState } from "react";
import TokenContext from "../contexts/TokenContext.js";
import { useContext } from "react";
import routes from "../backendroutes";
import axios from "axios";

function ButtonFollowUnfollow(userFolowId) {
  const [follow, setUnfollow] = useState("Follow");
  const [activeButton, setActiveButton] = useState(true);
  const { token } = useContext(TokenContext);
  const { id } = userFolowId;

  useEffect(() => {
    axios
      .get(routes.FOLLOWER_BYID(id), { headers: { Authorization: token } })
      .then((res) => {
        setUnfollow(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Usuário não encontrado.");
      });
  }, []);

  function updateFollow() {
    setActiveButton(false);

    if (follow === "Follow") {
      axios
        .delete(routes.FOLLOWER_BYID(id), { headers: { Authorization: token } })
        .then((res) => {
          setUnfollow(res.data);
          setActiveButton(true);
        })
        .catch((err) => {
          setActiveButton(true);
          console.error(err);
          alert("Não foi possível deixar de seguir esse usuário!");
        });
    }

    if (follow === "Unfollow") {
      axios
        .post(routes.FOLLOWER_BYID(id), { headers: { Authorization: token } })
        .then((res) => {
          setUnfollow(res.data);
          setActiveButton(true);
        })
        .catch((err) => {
          setActiveButton(true);
          console.error(err);
          alert("Não foi possível seguir esse usuário!");
        });
    }
  }

  return (
    <BUTTONFOLLOW onClick={() => (activeButton ? updateFollow() : "")}>
      {follow}
    </BUTTONFOLLOW>
  );
}

export default ButtonFollowUnfollow;

const BUTTONFOLLOW = styled.div`
  width: 112px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
  background: #1877f2;
  border-radius: 5px;
`;
