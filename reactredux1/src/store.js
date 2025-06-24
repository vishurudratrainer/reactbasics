
import { legacy_createStore,combineReducers } from "redux";

import CountReducer from "./reducers/CountReducer";

const store= legacy_createStore(combineReducers({counter:CountReducer}))

export default store