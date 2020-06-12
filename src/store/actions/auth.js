import axios from "axios";
import {LOGIN_SUCCESS} from "./types"

const baseUrl = "https://miniproject-team-a.herokuapp.com/api/v1"

const login = data => async dispatch =>{
    try {
        const res =await axios.post(`${baseUrl}/login`, data)
        console.log(res.data)
        window.localStorage.setItem('token', res.data.data.access_token)
        dispatch({
            type: LOGIN_SUCCESS
        })
      } catch (err) {
        console.log(err)
      }
    }

export default login;