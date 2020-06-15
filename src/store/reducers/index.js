import { combineReducers } from "redux";
import auth from "./auth";
import homeReducer from "./homeReducer";

export default combineReducers({
  auth,
  homeReducer
});
