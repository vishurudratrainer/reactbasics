import { Routes, Route, Link } from "react-router-dom";
import Counter from "../Counter";
import StudentForm from "../StudentForm";
import Calcultor from "../Calculator";
import TransferEg from "../TransferEg";
const Nav = () => {
  return (
    <div>
      <Link to={"/"}>Counter</Link> <br />
      <Link to={"/studentform"}>StudentForm</Link> <br />
      <Link to={"calculator"}>Calcultor</Link> <br />
      <Link to={"transfer"}>Transfer</Link> <br />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/studentform" element={<StudentForm />} />
        <Route path="/calculator" element={<Calcultor />} />
        <Route path="/transfer" element={<TransferEg />} />
      </Routes>
    </div>
  );
};

export default Nav;
