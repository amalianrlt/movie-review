import {GET_MOVIES_SUCCESS} from "../actions/types";

const initialState = {
  movies: []
};
const homeReducer =(state = initialState, action) => {
  const {type, payload} = action;
 switch (type) {
   case GET_MOVIES_SUCCESS:
     console.log("PAY")
     return [
       ...state,{
       movies: payload}
     ];
     default:
     return {...state}
 }
}

export default homeReducer

// export const getMovies = (state = initialState, action) => {
//   switch(action.type) {
//     default:
//       return {
//         ...state
//       }
//   }
// }

// export function homeReducer(state=initialState, action){
//   switch(action.type){
//     case types.GET_MOVIES_SUCCESS
//   }
// }


// export default function homeReducer(state = initialState, action) {
//   switch (action.type) {
//     case types.GET_MOVIES_REQUEST:
//       return {
//         ...state,
//       };
//     case types.GET_MOVIES_SUCCESS:
//       return {
//         ...state,
//         movies: action.result
//       };
//       default:
//       return {...state}
//   }
// }
