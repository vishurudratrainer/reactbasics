import { useState } from "react";
import TodoTable from "./TodoTable";

const FetchTodo = () => {
  const [todo, setTodo] = useState([]);

  const fetchTodo = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  };

  return (
    <div>
      <button onClick={fetchTodo}>FETCH TODO</button>
      <TodoTable error={{error:null}} tableData={todo}/>
    </div>
  );
};

export default FetchTodo;
