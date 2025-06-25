import { useDispatch, useSelector } from "react-redux";
import { FETCH_TODO, CAPTURE_TODO_ID, FETCH_TODO_BY_ID } from "./Actions";

const Todo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos);
  const sendTodo = () => dispatch({ type: FETCH_TODO });
  const captureId = (e) =>
    dispatch({ type: CAPTURE_TODO_ID, todoId: e.target.value });
  const sendTodoById = () =>
    dispatch({ type: FETCH_TODO_BY_ID, todoId: data.todoId });

  return (
    <div>
      <button onClick={sendTodo}>FETCH_TODO</button>
      <br />
      <label>
        Enter id <input onChange={captureId} />
      </label>
      <br />
      <button onClick={sendTodoById}>FETCH TODO BY ID</button>
      <br />
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};

export default Todo;
