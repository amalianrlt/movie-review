import {GET_MOVIES_REQUEST, GET_MOVIES_ID} from "../actions/types";

let initialState = {
  movies: [],
  moviesId : []
};
const homeReducer =(state = initialState, action) => {
  const {type, payload} = action;
 switch (type) {
   case GET_MOVIES_REQUEST:
     return {
       ...state, 
       movies:payload}
    case GET_MOVIES_ID:
      return {
        ...state,
        moviesId:payload
      }
     default:
     return state
 }
}

export default homeReducer
