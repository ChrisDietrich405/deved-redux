import { combineReducers } from "redux";
import loggedReducer from "./isLogged";
import counterReducer from "./counter";

const allReducers = combineReducers({
  counter: counterReducer,
  loggedIn: loggedReducer,
});

export default allReducers;
