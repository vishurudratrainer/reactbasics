import { useState } from "react";
interface TodosProps {
  id?: number;
  userId?: number;
  title?: string;
  completed?: boolean;
}
export default function Todos() {
  const [todos, setTodos] = useState<TodosProps[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((data) => data.json())
      .then((data) => setTodos(data));
  };

  return (
    <div>
      <button onClick={handleClick}>FETCH TODO</button>
      <table border={1}>
        <thead>
            <tr><th>ID</th><th>USERID</th><th>TITLE</th><th>COMPLETED</th></tr>
        </thead>
        <tbody>
          {todos.map((row) => (
            <tr>
              <td>{row.id}</td>
              <td>{row.userId}</td>
              <td>{row.title}</td>
              <td>{row.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
