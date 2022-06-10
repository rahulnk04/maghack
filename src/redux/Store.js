import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  topicsReducer,
  topicsReactReducer,
  qstnReactReducer,
  mcqReactReducer,
  qstnJavaScriptReducer,
  qstnNodeJsReducer,
  qstnHtmlReducer,
  qstnCssReducer,
} from "./reducers/Reducers";

const reducer = combineReducers({
  topicsAll: topicsReducer,
  reactTopicsAll: topicsReactReducer,
  reactQstnsAll: qstnReactReducer,
  reactMcqAll: mcqReactReducer,
  javascriptAll: qstnJavaScriptReducer,
  nodejsAll: qstnNodeJsReducer,
  htmlAll: qstnHtmlReducer,
  cssAll: qstnCssReducer,
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
