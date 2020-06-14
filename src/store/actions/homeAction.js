import * as types from "./types"  
import Axios from 'axios'

export function getMovies(){
  return(dispatch) =>{
    dispatch({type: types.GET_MOVIES_REQUEST})
    Axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/photos",
    })
    .then((res) => {
      console.log("RES", res)
      dispatch({
        type: types.GET_MOVIES_SUCCESS,
        result: res.data.slice(0,30)
       })
    })
    .catch((err) => {
      console.log({
        type: types.GET_MOVIES_FAILED,
        error: err
      })
    });
  }
}