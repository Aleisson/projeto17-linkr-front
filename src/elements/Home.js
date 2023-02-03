import STYLES from "./styles/homestyles.js";
import Post from "./Post";
import Topbar from "./Topbar";
import Trending from "./Trending";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
import { useContext, useEffect, useState } from "react";
import routes from "../backendroutes";
import { useParams } from "react-router-dom";

import InfiniteScroll from "react-infinite-scroll-component";
import { deletePost } from '../services/delete.services.js';
export default function Home() {
  const { token, setToken } = useContext(TokenContext);
  const id = useParams().id;
  const idhash = useParams().idhash;
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("Loading...");
  const [inserturl, setInserturl] = useState("");
  const [insertdesc, setInsertdesc] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [userimage, setUserimage] = useState("");
  const [disable, setDisable] = useState(false);
  const [buttontext, setButtontext] = useState("Publicar");
  const [page, setPage] = useState(1);

  let displayPosts = posts.slice(0, (10 * page))

  function loadMorePosts() {
    if (displayPosts.length < posts.length) { setPage(page + 1) } else { console.log("você chegou ao fim!") }
  }
  
  useEffect(() => {
    const tok = JSON.parse(localStorage.getItem("token"));
    if (tok) {
      setToken(`Bearer ${tok}`);
    }
  });
  useEffect(() => {
    if (token != null) {
      if (id) {

        axios.get(routes.GET_POSTS_BYID(id), { headers: { Authorization: token } }).then((res) => { res.data.length > 0 ? setPosts(res.data) : setMessage("There are no posts yet") })
          .catch((err) => { console.error(err); alert("An error occured while trying to fetch the posts, please refresh the page") });
      } else if (idhash) {
        axios.get(routes.GET_HASHTAGS_BY_ID(idhash))
          .then((res) => {
            setPosts(res.data);
          })
          .catch((error) => {
            if (error.response.status === 404) {
              alert("Não foi possível se conectar")
            }
          })
      } else {
        axios.get(routes.GET_POSTS, { headers: { Authorization: token } }).then((res) => { setUserimage(res.data.user[0].pictureUrl); (res.data.posts.length) > 0 ? setPosts(res.data.posts) : setMessage("There are no posts yet") })
          .catch((err) => { console.error(err); alert("An error occured while trying to fetch the posts, please refresh the page") });
      }
    }
  }, [refresh, id, token, idhash]);

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


  function handleRemove(index, postId) {

    const promise = deletePost(postId);
    promise.then(res => {
      alert('Post deletado');
      setPosts(posts.filter((item, i) => i !== index));
    });
    promise.catch(res => alert('Erro deleção'));
  }

  return (
    <>
      <Topbar />
      <STYLES.CONTENT>
        <STYLES.TOPTIMELINE>
          {posts.length > 0 && (id ? `${posts[0].username}'s posts` : (idhash ? `${posts[0].name}` : "timeline"))}
        </STYLES.TOPTIMELINE>

        <STYLES.TIMELINE>
          <STYLES.POSTS>
            {(id || idhash) ? null : (
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

                    <STYLES.BUTTON disabled={disable} type="submit">{buttontext}</STYLES.BUTTON>
                  </STYLES.FORM>
                </STYLES.RIGTHPOST>
              </STYLES.INSERTPOST>)}

            <InfiniteScroll
              dataLength={displayPosts.length}
              next={loadMorePosts}
              hasMore={true}>

              {posts.length > 0 ? displayPosts.map((item, index) => { return <Post key={index} id={item.id} content={item.content} link={item.link} url={item.pictureUrl} username={item.username} userid={item.userId} handleRemove={handleRemove} index={index} /> }) : <STYLES.MESSAGE>{message}</STYLES.MESSAGE>}

            </InfiniteScroll>
            
          </STYLES.POSTS>
          <Trending />
        </STYLES.TIMELINE>
      </STYLES.CONTENT>
    </>
  );
}
