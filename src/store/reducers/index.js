import { combineReducers } from "redux";
import auth from "./auth";
import movieList from "./movieList";

export default combineReducers({
  auth,
  movieList: movieList,
});
