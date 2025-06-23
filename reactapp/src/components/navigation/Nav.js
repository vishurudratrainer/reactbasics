import { Routes, Route, Link } from "react-router-dom";
import Login from "../login/Login";
import StudentForm from "../StudentForm";
import Calcultor from "../Calculator";
import TransferEg from "../TransferEg";
import { useState } from "react";
import PrivateComponent from "../PrivateComponent";
import Select from "../Select";
import SelectWithContext from "../contextusage/SelectWithContext";

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
          <Link to={"propertydrill"}>Property drill</Link> <br />
          <Link to={"withcontext"}>Select With context</Link> <br />
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route element={<PrivateComponent isAuthenticated={isAuthenticated} />}>
          <Route path="/studentform" element={<StudentForm />} />
          <Route path="/calculator" element={<Calcultor />} />
          <Route path="/transfer" element={<TransferEg />} />
          <Route path="/propertydrill" element={<Select />} />
          <Route path="/withcontext" element={<SelectWithContext />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Nav;
