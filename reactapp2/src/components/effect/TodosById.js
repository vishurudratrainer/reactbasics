import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import axios from "axios";
const TodosById = () => {
  const [todoId, setTodoId] = useState("");
  const [todos, setTodos] = useState({});

  useEffect(() => {
    if (todoId !== "") {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/" + todoId)
        .then((data) => setTodos(data.data))
        .catch((e) => console.log(e));
    }
  }, [todoId]);

  const capture = (e) => setTodoId(e.target.value);

  return (
    <div>
      <label>
        Enter todo id
        <TextField
          required
          id="outlined-required"
          label="Enter Todo id"
          onChange={capture}
        />{" "}
      </label>
      <Alert severity="info">{JSON.stringify(todos)}</Alert>
    </div>
  );
};

export default TodosById;
