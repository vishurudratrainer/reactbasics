import { useDispatch, useSelector } from "react-redux";

export default function Todos() {
  const dispatch = useDispatch();
  const todosData = useSelector((state) => state.todos);
  const fetchTodo = () => dispatch({ type: "FETCH_TODO" });

  return (
    <div>
      {todosData.todos.loading && <h1>loading in progress</h1>}
      {!todosData.todos.loading && <h1>Todos :{JSON.stringify(todosData)}</h1>}
      <br />
      <button onClick={fetchTodo}>FETCH_TODO</button>
    </div>
  );
}
