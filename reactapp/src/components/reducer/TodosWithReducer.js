import { useReducer, useEffect } from "react";

const TodosReducer = (
  state = { todos: [], doFetch: false, todoId: "" },
  action
) => {
  if (action) {
    if (action.type === "FETCH_TODO") {
      return { ...state, todos: [], doFetch: true };
    }

    if (action.type === "CAPTURE_TODO_ID") {
      return { ...state, todos: [], doFetch: false, todoId: action.todoId };
    }

    if (action.type === "FETCHED_TODOS") {
      return { ...state, todos: action.data, doFetch: false };
    }
  }
  return state;
};

export default function TodosWithReducer() {
  const [data, dispatch] = useReducer(TodosReducer);
  const fetchTodo = () => dispatch({ type: "FETCH_TODO" });

  useEffect(() => {
    if (data?.doFetch) {
      let url = "https://jsonplaceholder.typicode.com/todos";
      if (data.todoId !== "") url = url + "/" + data.todoId;
      fetch(url)
        .then((data) => data.json())
        .then((data) => dispatch({ type: "FETCHED_TODOS", data: data }));
    }
  }, [data?.doFetch, data?.todoId]);
  const capture = (e) =>
    dispatch({ type: "CAPTURE_TODO_ID", todoId: e.target.value });

  return (
    <div>
      <button onClick={fetchTodo}>FETCH TODO USING REDUCER</button>
      <label>
        Enter TODO ID <input onChange={capture} />
      </label>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
}
