import { GET_MOVIES_REVIEW } from "./types"  
import Axios from 'axios'

const url = "https://movieapp-project-2.herokuapp.com/api/v1"

export const getMoviesReview = (id) => {
  let token = localStorage.getItem("token")
  return dispatch => {
    Axios({
      method: "POST",
      url: `${url}/movies/${id}/review`,
      headers: {
        "Content-type": "application/json"
      },
      Authorization: token
    })
    .then((res) => { 
      console.log("data", res)
      dispatch({
        type: GET_MOVIES_REVIEW,
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
