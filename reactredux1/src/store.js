import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

import CountReducer from "./reducers/CountReducer";
import TodosReducer from "./reducers/TodosReducer";
import TodosMiddleware from "./middlewares/TodosMiddleware";
import PostMiddleware from "./middlewares/PostMiddleware";
import PostReducer from "./reducers/PostReducer";

const store = legacy_createStore(
  combineReducers({ counter: CountReducer, todos: TodosReducer,post:PostReducer }),
  applyMiddleware(TodosMiddleware,PostMiddleware)
);

export default store;
