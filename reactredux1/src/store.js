import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

import CountReducer from "./reducers/CountReducer";
import TodosReducer from "./reducers/TodosReducer";
import TodosMiddleware from "./middlewares/TodosMiddleware";

const store = legacy_createStore(
  combineReducers({ counter: CountReducer, todos: TodosReducer }),
  applyMiddleware(TodosMiddleware)
);

export default store;
