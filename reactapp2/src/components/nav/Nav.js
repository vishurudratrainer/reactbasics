import { Routes, Route, Link } from "react-router-dom";
import Login from "../login/Login";
import Welcome from "../Welcome";

const Nav = () => (
  <div>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  </div>
);

export default Nav;
