import axios from "axios";
import { LOGIN_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILED, LOGIN_FAILED } from "./types";


export const login = (data) => async (dispatch) => {
   try {
     const res = await axios.post("https://movieapp-project-2.herokuapp.com/api/v1/login", data);
     console.log(res.data.data.access_token, "COBA");
    window.localStorage.setItem("token", res.data.data.access_token);
    dispatch({
      type: LOGIN_SUCCESS,
    });
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
    const res = await axios.post("https://movieapp-project-2.herokuapp.com/api/v1/register", data);
    console.log(res.data, "COBA");
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
