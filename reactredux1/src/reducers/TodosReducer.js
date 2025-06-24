export default function TodosReducer(state = { todos: [],loading:false }, action) {
  if (action) {
    console.log("action", action);

    if (action.type === "FETCH_TODO") {
      return { ...state, todos: [],loading:true };
    }
    if (action.type === "FETCHED_TODO") {
      return { ...state, todos: action.data,loading:false };
    }
  }
  return state;
}
