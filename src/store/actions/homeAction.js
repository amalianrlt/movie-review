import { GET_MOVIES_REQUEST, GET_MOVIES_ID } from "./types"  
import Axios from 'axios'

const url = "https://movieapp-project-2.herokuapp.com/api/v1"

export const getMovies = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `${url}/movies/`,
      headers: {
        "Content-type": "application/json"
      } 
    })
    .then((res) => { 
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

export const getMoviesPagination = (key) => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `${url}/movies?page=${key}`,
      headers: {
        "Content-type": "application/json"
      } 
    })
    .then((res) => { 
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

export const getMoviesId = (movies_id) => {
  return dispatch => (
    Axios({
      method: "GET",
      url: `${url}/movies/${movies_id}`,
      headers: {
        "Content-type": "application/json"
      } 
    })
    .then((res)=>{
      console.log(res.data.data.Reviews, "RESDATAaaa")
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
