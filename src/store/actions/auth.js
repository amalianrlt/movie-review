import axios from "axios";
import { LOGIN_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILED, LOGIN_FAILED, SIGN_OUT, GET_USER } from "./types";

const baseUrl = "https://movieapp-project-2.herokuapp.com/api/v1"

export const login = (data) => async (dispatch) => {
   try {
     const res = await axios.post(`${baseUrl}/login`, data);
    window.localStorage.setItem("token", res.data.data.access_token);
    dispatch({
      type: LOGIN_SUCCESS,
    });
    console.log("RES", res.data.data.username)
  } catch (err) {
    console.log(`${err.response.data.message}`);
    dispatch({
      type: LOGIN_FAILED,
    })
  }
};

export const userRegister = (data) => async (dispatch) => {
  console.log("DATA", data)
  try {
    const res = await axios.post(`${baseUrl}/register`, data)
    window.localStorage.setItem("token", res.data.data.access_token);
    dispatch({
      type: REGISTER_SUCCESS,
    });
  } catch (err) {
    console.log(`${err.response.data.message}`);
    dispatch({
      type: REGISTER_FAILED
    })

  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const getUser = () => {
  let token = localStorage.getItem("token");
  return dispatch => {
    axios({
      method: "PUT",
      url: "https://movieapp-project-2.herokuapp.com/api/v1/user",
      headers: {
        Authorization : token
      } 
    })
    // console.log(token)
    .then((res) => { 
      // console.log(res.data.data)
      dispatch({
        type: GET_USER,
        payload: res.data.data
       })
    })
    .catch((err) => {
      // console.log({
      //   error: err
      // })
    });
  }
}

