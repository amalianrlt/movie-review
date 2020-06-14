import { GET_MOVIES_REQUEST } from "./types"  
import Axios from 'axios'

export function getMovies(){
  return dispatch => {
    // dispatch({type: types.GET_MOVIES_REQUEST})
    Axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/photos",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      } 
    })
    .then((res) => {
      console.log("RES",res.data.slice(0,30))
      dispatch({
        type: GET_MOVIES_REQUEST,
        payload: res.data.title
       })
    })
    .catch((err) => {
      console.log({
        error: err
      })
    });
  }
}





// const baseUrl = "https://jsonplaceholder.typicode.com/photos"

// const getMovies = data => async dispatch =>{
//     try {
//         const res = await Axios.post(`${baseUrl}`, data)
//         console.log(res.data, "COBA")
//         dispatch({
//             type: GET_MOVIES_REQUEST
//         })
//       } catch (err) {
//         console.log(err)
//       }
//     }

// export default getMovies;