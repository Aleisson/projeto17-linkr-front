import "./css/reset.css";
import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./elements/SignIn";
import SignUp from "./elements/SignUp";
import Home from "./elements/Home";
<<<<<<< HEAD
import { WorkPlace } from "./elements/Likes/WorkPlace.js";
import TokenContext from "./contexts/TokenContext";
import { useState } from "react";

export default function App() {
  const [token,setToken] = useState(null);
  return (
    <>
      <TokenContext.Provider value={{token,setToken}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/timeline" element={<Home />} />
          <Route path="/workplace" element={<WorkPlace />} />
        </Routes>
      </BrowserRouter>
      </TokenContext.Provider>
=======
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
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/timeline" element={<Home/>}/>
        <Route path="/workplace" element={<WorkPlace />} />
      </Routes>
    </BrowserRouter>
    </TokenContext.Provider>
>>>>>>> fe7308e9c90ea80366fb8f6373e06665d3eaa058
    </>
    );
}