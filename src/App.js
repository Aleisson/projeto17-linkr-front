import "./css/reset.css";
import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./elements/SignIn";
import SignUp from "./elements/SignUp";
import Home from "./elements/Home";
import TokenContext from "./contexts/TokenContext";
import { useState } from "react";
import { WorkPlace } from "./elements/Likes/WorkPlace.js";

export default function App(){
  const [token,setToken] = useState(null);
  return(
    <>
    <TokenContext.Provider value={{token,setToken}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/timeline" element={<Home/>}/>
        <Route path="/user/:id" element={<Home/>}/>
        <Route path="/workplace" element={<WorkPlace />} />
      </Routes>
    </BrowserRouter>
    </TokenContext.Provider>
    </>
    );
}
