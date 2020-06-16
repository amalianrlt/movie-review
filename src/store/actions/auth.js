import axios from "axios";
import { LOGIN_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILED, LOGIN_FAILED } from "./types";

const baseUrl = "https://movieapp-project-2.herokuapp.com/api/v1";

 const login = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/login`, data);
    console.log(res.data, "COBA");
    window.localStorage.setItem("token", res.data.access_token);
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
export default login

export const useRegister = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/register`, data);
    console.log(res.data, "COBA");
    window.localStorage.setItem("token", res.data.access_token);
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
