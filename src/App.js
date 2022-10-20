import "./assets/css/reset.css";
import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./elements/SignIn";
import SignUp from "./elements/SignUp";
import Home from "./elements/Home";
import { WorkPlace } from "./elements/Likes/WorkPlace.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/timeline" element={<Home />} />
          <Route path="/workplace" element={<WorkPlace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
