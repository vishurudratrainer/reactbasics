export default function TodosReducer(
  state = { todoId: "", todos: [], loading: false },
  action
) {
  if (action) {
    console.log("action", action);

    if (action.type === "FETCH_TODO") {
      return { ...state, todos: [], loading: true };
    }
    if (action.type === "FETCHED_TODO") {
      return { ...state, todos: action.data, loading: false };
    }
    if (action.type === "CAPTURE_TODO_ID") {
      return { ...state, todoId: action.todoId, loading: false };
    }
  }
  return state;
}
