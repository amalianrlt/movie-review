import {GET_MOVIES_REVIEW } from "../actions/types";

const initialState = {
  average: null,
  count: null,
  comments: []
}

const review = (state = initialState, action) => {
  const {type, comments} = action;
  switch(type ) {
      case GET_MOVIES_REVIEW :
      return {
          ...state,
          comments: comments
      }
      default: 
      return {
          ...state
      }
      
  }
}
export default review;
