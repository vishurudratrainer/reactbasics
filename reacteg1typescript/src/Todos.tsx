import { useState } from "react";
interface TodosProps {
  id?: number;
  userId?: number;
  title?: string;
  completed?: boolean;
}
export default function Todos() {
  const [todos, setTodos] = useState<TodosProps[]>([]);
  const [todoId, setTodoId] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((data) => data.json())
      .then((data) => setTodos(data));
  };

    const handleClickById = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    fetch("https://jsonplaceholder.typicode.com/todos/"+todoId)
      .then((data) => data.json())
      .then((data) => setTodos([data]));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoId(e.target.value);

  return (
    <div>
      <label>
        Enter input <input onChange={handleChange} />
      </label>
      <button onClick={handleClickById}>FETCH TODO BY ID</button><br/>

      <button onClick={handleClick}>FETCH TODO</button>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>USERID</th>
            <th>TITLE</th>
            <th>COMPLETED</th>
          </tr>
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
