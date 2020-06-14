import * as types from "../actions/types";

const initialState = {
  movies: [],
  result: null,
  error: null
};

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

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_MOVIES_REQUEST:
      return {
        ...state,
      };
    case types.GET_MOVIES_SUCCESS:
      return {
        ...state,
        result: action.result
      };
    case types.GET_MOVIES_FAILED:
      return {
        ...state,
        error: action.error
      };
      default:
      return {...state}
  }
}
