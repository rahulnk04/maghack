import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  topicsReducer,
  topicsReactReducer,
  qstnReactReducer,
} from "./reducers/Reducers";

const reducer = combineReducers({
  topicsAll: topicsReducer,
  reactTopicsAll: topicsReactReducer,
  reactQstnsAll: qstnReactReducer,
});
let initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  // For Development
  composeWithDevTools(applyMiddleware(...middleware))
  // For Production
  // applyMiddleware(...middleware)
);
export default store;
