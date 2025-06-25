import { takeLatest, call, put } from "redux-saga/effects";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("FETCH_DOG", dogFetcherSaga); //Look up is done on action.type
  yield takeLatest("FETCH_TODO", todoFetcherSaga);
  //takeLatest means take the latest request
}

function callDogApi() {
  return fetch("https://dog.ceo/api/breeds/image/random").then((data) =>
    data.json()
  );
}

function callTodoApi() {
  return fetch("https://jsonplaceholder.typicode.com/todos/").then((data) =>
    data.json()
  );
}

function* dogFetcherSaga() {
  let data = yield call(callDogApi); //this is peforming async call
  //whenver data arrives this will get called
  yield put({ type: "DOG_FETCHED", data: data }); //this is equivalent of dispatch function
}
function* todoFetcherSaga() {
  let data = yield call(callTodoApi);
  yield put({ type: "TODOS_FETCHED", data: data });
}

// funct
