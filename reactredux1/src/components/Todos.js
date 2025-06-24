import { useDispatch, useSelector } from "react-redux";

export default function Todos() {
  const dispatch = useDispatch();
  const todosData = useSelector((state) => state.todos);
  const fetchTodo = () => dispatch({ type: "FETCH_TODO" });
  const fetchTodoById = () => dispatch({ type: "FETCH_TODO_BY_ID",todoId:todosData.todoId });

  const captureId = (e) =>
    dispatch({ type: "CAPTURE_TODO_ID", todoId: e.target.value });

  return (
    <div>
      <label>
        Enter Todo Id <input onChange={captureId} />
      </label>

      {<h1>Todos :{JSON.stringify(todosData)}</h1>}
      <br />
      <button onClick={fetchTodo}>FETCH_TODO</button>
      <button onClick={fetchTodoById}>FETCH_TODO_BY_ID</button>
    </div>
  );
}
