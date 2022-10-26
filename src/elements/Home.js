import STYLES from "./styles/homestyles.js";
import Post from "./Post";
import Topbar from "./Topbar";
import Trending from "./Trending";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
import { useContext, useEffect, useState } from "react";
import routes from "../backendroutes";
import { useParams } from "react-router-dom";
import ButtonFollowUnfollow from "./ButtonUnfollowFollow.js";

export default function Home() {
  const { token, setToken } = useContext(TokenContext);
  const id = useParams().id;
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("Loading...");
  const [inserturl, setInserturl] = useState("");
  const [insertdesc, setInsertdesc] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [userimage, setUserimage] = useState("");
  const [disable, setDisable] = useState(false);
  const [buttontext, setButtontext] = useState("Publicar");
  useEffect(() => {
    const tok = JSON.parse(localStorage.getItem("token"));
    if (tok) {
      setToken(`Bearer ${tok}`);
    }
  });
  useEffect(() => {
    if (token != null) {
      if (id) {
        axios
          .get(routes.GET_POSTS_BYID(id), { headers: { Authorization: token } })
          .then((res) => {
            res.data.length > 0
              ? setPosts(res.data)
              : setMessage("There are no posts yet");
          })
          .catch((err) => {
            console.error(err);
            alert(
              "An error occured while trying to fetch the posts, please refresh the page"
            );
          });
      } else {
        axios
          .get(routes.GET_POSTS, { headers: { Authorization: token } })
          .then((res) => {
            setUserimage(res.data.user[0].pictureUrl);
            res.data.posts.length > 0
              ? setPosts(res.data.posts)
              : setMessage("There are no posts yet");
          })
          .catch((err) => {
            console.error(err);
            alert(
              "An error occured while trying to fetch the posts, please refresh the page"
            );
          });
      }
    }
  }, [refresh, id, token]);
  function handleForm(e) {
    e.preventDefault();
    setDisable(true);
    setButtontext("Publishing...");
    const senddata = {
      url: inserturl,
      complement: insertdesc,
    };
    axios
      .post(routes.INSERT_POST, senddata, { headers: { Authorization: token } })
      .then(() => {
        setDisable(false);
        setRefresh(!refresh);
        setInsertdesc("");
        setInserturl("");
        setButtontext("Publicar");
      })
      .catch((err) => {
        console.error(err);
        setDisable(false);
        setButtontext("Publicar");
        if (err.request.status === 422) {
          alert("Url inválida");
        } else {
          alert("Houve um erro ao publicar seu link");
        }
      });
  }

  return (
    <>
      <Topbar />
      <STYLES.CONTENT>
        <STYLES.TOPTIMELINE>
          {posts.length > 0 && id ? `${posts[0].username}'s posts` : "timeline"}
          {id ? <ButtonFollowUnfollow/> : "" }
        </STYLES.TOPTIMELINE>

        <STYLES.TIMELINE>
          <STYLES.POSTS>
            {id ? null : (
              <STYLES.INSERTPOST>
                <STYLES.LEFTPOST>
                  <STYLES.USERIMAGE src={userimage} />
                </STYLES.LEFTPOST>
                <STYLES.RIGTHPOST>
                  <STYLES.INSERTPOSTMESSAGE>
                    What are you going to share today?
                  </STYLES.INSERTPOSTMESSAGE>
                  <STYLES.FORM onSubmit={handleForm}>
                    <STYLES.INPUT
                      h="30px"
                      disabled={disable}
                      value={inserturl}
                      onChange={(e) => setInserturl(e.target.value)}
                      type="text"
                      placeholder="http://..."
                      required
                    />
                    <STYLES.INPUT
                      h="66px"
                      disabled={disable}
                      value={insertdesc}
                      onChange={(e) => setInsertdesc(e.target.value)}
                      type="text"
                      placeholder="Awesome article about #javascript"
                    />
                    <STYLES.BUTTON disabled={disable} type="submit">
                      {buttontext}
                    </STYLES.BUTTON>
                  </STYLES.FORM>
                </STYLES.RIGTHPOST>
              </STYLES.INSERTPOST>
            )}
            {posts.length > 0 ? (
              posts.map((item, index) => {
                return (
                  <Post
                    key={index}
                    id={item.id}
                    content={item.content}
                    link={item.link}
                    url={item.pictureUrl}
                    username={item.username}
                    userid={item.userId}
                  />
                );
              })
            ) : (
              <STYLES.MESSAGE>{message}</STYLES.MESSAGE>
            )}
          </STYLES.POSTS>
          <Trending />
        </STYLES.TIMELINE>
      </STYLES.CONTENT>
    </>
  );
}
