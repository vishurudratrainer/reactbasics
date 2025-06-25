import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { watcherSaga } from "./middlewares/SagaMiddleware";
import DogReducer from "./reducers/DogReducer";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(
  combineReducers({ dog: DogReducer }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watcherSaga);
export default store;
