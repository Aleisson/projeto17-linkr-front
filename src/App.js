import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Signin from "./elements/Signin";
import Signup from "./elements/Signup";
import Home from "./elements/Home";

export default function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}