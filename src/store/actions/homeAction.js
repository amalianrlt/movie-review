import { GET_MOVIES_REQUEST, GET_MOVIES_ID } from "./types"  
import Axios from 'axios'

const url = "https://movieapp-project-2.herokuapp.com/api/v1"

export const getMovies = () => {
  return dispatch => {
    // dispatch({type: types.GET_MOVIES_REQUEST})
    Axios({
      method: "GET",
      url: `${url}/movies/`,
      headers: {
        "Content-type": "application/json"
      } 
    })
    .then((res) => { 
      console.log('RESPON', res)
      dispatch({
        type: GET_MOVIES_REQUEST,
        payload: res.data.data
       })
    })
    .catch((err) => {
      console.log({
        error: err
      })
    });
  }
}

export const getMoviesId = (id) => {
  return dispatch => (
    Axios({
      method: "GET",
      url: `${url}/movies/${id}`,
      headers: {
        "Content-type": "application/json"
      } 
    })
    .then((res)=>{
      console.log(res, "RESDATAaaa")
      dispatch({
        type : GET_MOVIES_ID,
        payload : res.data.data
      })
    })
    .catch((err)=>{
      console.log('ERROR', err)
    })
  )
}
