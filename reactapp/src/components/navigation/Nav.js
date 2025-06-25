import { Routes, Route, Link } from "react-router-dom";
import Login from "../login/Login";
import StudentForm from "../StudentForm";
import Calcultor from "../Calculator";
import TransferEg from "../TransferEg";
import { useState } from "react";
import PrivateComponent from "../PrivateComponent";
import Select from "../Select";
import SelectWithContext from "../contextusage/SelectWithContext";
import AuthContext from "../../context/AuthContext";
import FetchTodo from "../rest/FetchTodo";
import FetchTodoId from "../rest/FetchTodoId";
import FetchPostCreate from "../rest/FetchPostCreate";
import FetchPostUncontrolled from "../rest/FetchPostUncontrolled";
import AxiosTodo from "../rest/AxiosTodo";
import AxiosPostUnControlled from "../rest/AxiosPostUnControlled";
import TodosWithReducer from "../reducer/TodosWithReducer";

const Nav = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuthenticated: isAuthenticated }}>
      <div>
        {isAuthenticated && (
          <div>
            <Link to={"/"}>Login</Link> <br />
            <Link to={"/studentform"}>StudentForm</Link> <br />
            <Link to={"calculator"}>Calcultor</Link> <br />
            <Link to={"transfer"}>Transfer</Link> <br />
            <Link to={"propertydrill"}>Property drill</Link> <br />
            <Link to={"withcontext"}>Select With context</Link> <br />
            <Link to={"fetchtodo"}>Fetch todo</Link> <br />
            <Link to={"fetchtodoid"}>Fetch todo id</Link> <br />
            <Link to={"fetchpostcreate"}>Fetch Post Create</Link> <br />
            <Link to={"uncontrolled"}>Uncontrolled</Link> <br />
            <Link to={"axiostodo"}>Axios Todo</Link> <br />
            <Link to={"axiospost"}>Axios Post</Link> <br />
            <Link to={"todoswithreducer"}>Todos </Link> <br />
          </div>
        )}
        <Routes>
          <Route
            path="/"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            element={<PrivateComponent isAuthenticated={isAuthenticated} />}
          >
            <Route path="/studentform" element={<StudentForm />} />
            <Route path="/calculator" element={<Calcultor />} />
            <Route path="/transfer" element={<TransferEg />} />
            <Route path="/propertydrill" element={<Select />} />
            <Route path="/withcontext" element={<SelectWithContext />} />
            <Route path="/fetchtodo" element={<FetchTodo />} />
            <Route path="fetchtodoid" element={<FetchTodoId />} />
            <Route path="fetchpostcreate" element={<FetchPostCreate />} />
            <Route path="uncontrolled" element={<FetchPostUncontrolled />} />
            <Route path="axiostodo" element={<AxiosTodo />} />
            <Route path="axiospost" element={<AxiosPostUnControlled />} />
            <Route path="todoswithreducer" element={<TodosWithReducer />} />
          </Route>
        </Routes>
      </div>
    </AuthContext.Provider>
  );
};

export default Nav;
