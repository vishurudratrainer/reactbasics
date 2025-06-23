import { useState } from "react";
import Table1 from "./Table1";
import GoLogin from "./login/GoLogin";

export default function StudentForm(props) {
  const [studentId, setStudentId] = useState(0);
  const [name, setName] = useState("");
  const [student, setStudent] = useState([]);
  const captureId = (e) => setStudentId(e.target.value);
  const captureName = (e) => setName(e.target.value);
  const addStudent = (e) => {
    e.preventDefault(); //this is done to stop the form from submitting
    setStudent(student.concat({ id: studentId, name: name }));
  };
  if(props.isAuthenticated)
  return (
    <div>
      <form onSubmit={addStudent}>
        <label>
          Enter ur id <input onChange={captureId} required type="number" />
        </label>
        <br />
        <label>
          Enter ur name <input onChange={captureName} required />
        </label>
        <br />
        <button> Add user</button>
        <br />
      </form>
      <Table1 tableData={student} />
    </div>
  );
  else {
    return (<GoLogin/>)
  }
}
