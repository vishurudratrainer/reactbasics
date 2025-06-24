import { useState } from "react";
import TodoTable from "./TodoTable";
import axios from "axios";

const AxiosTodo = () => {
  const [todo, setTodo] = useState([]);

  const fetchTodo = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((data) => setTodo(data.data));
  };

  return (
    <div>
      <button onClick={fetchTodo}>FETCH TODO</button>
      <TodoTable error={{ error: null }} tableData={todo} />
    </div>
  );
};

export default AxiosTodo;
