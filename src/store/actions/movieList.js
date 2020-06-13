import axios from "axios";
import {GET_MOVIES} from "./types"

const baseUrl = "https://jsonplaceholder.typicode.com"

export const movieList = () => async dispatch =>{
  return (dispatch) => {
    axios({
      url: `${baseUrl}/photos`,
      method: 'GET',
      headers:{
        "Content-Type": "application/json",
      },
    })
    .then((res)=>{
      dispatch({
        type: GET_MOVIES,
        payload: res.movies
      })
    })
    .catch((err) => console.log(err))
  }
    }

// export const getMovies = () => {
//   return (dispatch) => {
//     axios({
//       url: `${baseUrl}/photos`,
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => {
//         dispatch({
//           type: "GET_MOVIES",
//           payload: res.data,
//         });
//       })
//       .catch((err) => console.log(err));
//   };
// };
