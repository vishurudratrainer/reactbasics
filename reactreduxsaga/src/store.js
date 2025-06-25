import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { watcherSaga } from "./middlewares/SagaMiddleware";
import DogReducer from "./reducers/DogReducer";
import TodosReducer from "./reducers/TodosReducer";
import createSagaMiddleware from "redux-saga";
import PostReducer from "./reducers/PostReducer";
const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(
  combineReducers({ dog: DogReducer,todos:TodosReducer,post:PostReducer }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watcherSaga);
export default store;
