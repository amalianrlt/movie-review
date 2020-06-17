import axios from "axios";
import { LOGIN_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILED, LOGIN_FAILED, SIGN_OUT } from "./types";


export const login = (data) => async (dispatch) => {
   try {
     const res = await axios.post("https://movieapp-project-2.herokuapp.com/api/v1/login", data);
    window.localStorage.setItem("token", res.data.data.access_token);
    dispatch({
      type: LOGIN_SUCCESS,
    });
    console.log("RES", res.data.data.username)
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAILED
    })
  }
};

export const userRegister = (data) => async (dispatch) => {
  console.log("DATA", data)
  try {
    const res = await axios.post("https://movieapp-project-2.herokuapp.com/api/v1/register", data)
    window.localStorage.setItem("token", res.data.data.access_token);
    dispatch({
      type: REGISTER_SUCCESS,
    });
  } catch (err) {
    console.log(err);
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

