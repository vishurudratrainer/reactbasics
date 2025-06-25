import { useReducer, useEffect } from "react";

const TodosReducer = (state = { todos: [], doFetch: false }, action) => {
  if (action) {
    if (action.type === "FETCH_TODO") {
      return { ...state, todos: [], doFetch: true };
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
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((data) => data.json())
        .then((data) => dispatch({ type: "FETCHED_TODOS", data: data }));
    }
  }, [data?.doFetch]);

  return (
    <div>
      <button onClick={fetchTodo}></button>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
}
