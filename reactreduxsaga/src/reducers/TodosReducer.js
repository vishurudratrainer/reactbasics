import { TODOS_FETCHED, CAPTURE_TODO_ID } from "../Actions";

const TodosReducer = (state = { todos: [], todoId: "" }, action) => {
  if (action) {
    if (action.type === TODOS_FETCHED) {
      return { ...state, todos: action.data };
    }
    if (action.type === CAPTURE_TODO_ID) {
      return { ...state, todoId: action.todoId };
    }
  }
  return state;
};

export default TodosReducer;
