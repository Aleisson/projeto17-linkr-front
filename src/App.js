import "./css/reset.css";
import "./css/style.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Signin from "./elements/Signin";
import Signup from "./elements/Signup";
import Home from "./elements/Home";

export default function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/timeline" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}