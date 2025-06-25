import { takeLatest, call, put } from "redux-saga/effects";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("FETCH_DOG", dogFetcherSaga); //Look up is done on action.type
  yield takeLatest("FETCH_TODO", todoFetcherSaga);
  yield takeLatest("FETCH_TODO_BY_ID", todoByIdFetcherSaga);
  yield takeLatest("SAVE_POST_DATA", savePostDataSaga);

  //takeLatest means take the latest request
}

function callDogApi() {
  return fetch("https://dog.ceo/api/breeds/image/random").then((data) =>
    data.json()
  );
}

function callTodoApi(url) {
  return fetch(url).then((data) => data.json());
}

function callPostApi(url, data) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
}

function* dogFetcherSaga() {
  let data = yield call(callDogApi); //this is peforming async call
  //whenver data arrives this will get called
  yield put({ type: "DOG_FETCHED", data: data }); //this is equivalent of dispatch function
}
function* todoFetcherSaga() {
  let data = yield call(
    callTodoApi,
    "https://jsonplaceholder.typicode.com/todos/"
  );
  yield put({ type: "TODOS_FETCHED", data: data });
}

function* todoByIdFetcherSaga(action) {
  let data = yield call(
    callTodoApi,
    "https://jsonplaceholder.typicode.com/todos/" + action.todoId
  );
  yield put({ type: "TODOS_FETCHED", data: data });
}

function* savePostDataSaga(action) {
  let data = yield call(
    callPostApi,
    "https://jsonplaceholder.typicode.com/posts/" ,action.formData
  );
  yield put({ type: "SAVED_POST_DATA", result: data });
}

// funct
