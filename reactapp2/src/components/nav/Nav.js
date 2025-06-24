import { Routes, Route, Link } from "react-router-dom";
import Login from "../login/Login";
import Welcome from "../Welcome";
import Todo from "../grid/Todo";

const Nav = () => (
  <div>
    <Link to={"welcome"}>Welcome</Link>
    <br />
    <Link to={"grid"}>Grid</Link>
    <br />

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/grid" element={<Todo />} />
    </Routes>
  </div>
);

export default Nav;
