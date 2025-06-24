import { Routes, Route, Link } from "react-router-dom";
import Login from "../login/Login";
import Welcome from "../Welcome";
import Todo from "../grid/Todo";
import Country from "../select/Country";
import TodosById from "../effect/TodosById";
import Nested from "../nested/Nested";

const Nav = () => (
  <div>
    <Link to={"welcome"}>Welcome</Link>
    <br />
    <Link to={"grid"}>Grid</Link>
    <br />
    <Link to={"country"}>Country</Link>
    <br />
    <Link to={"effect"}>Effect</Link>
    <br />
    <Link to={"nested"}>Nested</Link>
    <br />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/grid" element={<Todo />} />
      <Route path="/country" element={<Country />} />
      <Route path="/effect" element={<TodosById />} />
      <Route path="/nested" element={<Nested />} />
    </Routes>
  </div>
);

export default Nav;
