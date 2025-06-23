import { Routes, Route, Link } from "react-router-dom";
import Login from "../login/Login";
import StudentForm from "../StudentForm";
import Calcultor from "../Calculator";
import TransferEg from "../TransferEg";
import { useState } from "react";

const Nav = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
      {isAuthenticated && (
        <div>
          <Link to={"/"}>Login</Link> <br />
          <Link to={"/studentform"}>StudentForm</Link> <br />
          <Link to={"calculator"}>Calcultor</Link> <br />
          <Link to={"transfer"}>Transfer</Link> <br />
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        <Route path="/studentform" element={<StudentForm isAuthenticated={isAuthenticated} />} />
        <Route path="/calculator" element={<Calcultor isAuthenticated={isAuthenticated}/>} />
        <Route path="/transfer" element={<TransferEg isAuthenticated={isAuthenticated} />} />
      </Routes>
    </div>
  );
};

export default Nav;
