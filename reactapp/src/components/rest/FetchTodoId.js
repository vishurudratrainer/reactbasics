import { useState } from "react";
import TodoTable from "./TodoTable";

export default function FetchTodoId() {
  const [todos, setTodos] = useState([]);
  const captureTodoId = (e) => {
    fetch("https://jsonplaceholder.typicode.com/todos/" + e.target.value)
      .then((res) => res.json())
      .then((data) => setTodos([data]));
  };

  return (
    <div>
      <label>
        Enter id to fetch <input onChange={captureTodoId} />
      </label>
      <TodoTable tableData={todos}/>
    </div>
  );
}
