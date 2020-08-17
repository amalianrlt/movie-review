import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  SIGN_OUT,
  GET_USER,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  errors: null,
  dataUser: {}
};

const authCheck = (state = initialState) => {
  if (initialState.token === null || undefined){
    initialState.isAuthenticated = false
  } else {
    initialState.isAuthenticated = true
  }
}

const auth = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    default:
      authCheck()
      return {
        ...state,
      };
    case LOGIN_SUCCESS: {
      return {
        ...state,
        token: localStorage.getItem("token"),
        isAuthenticated: true,
        errors: null,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isAuthenticated: false,
        token: localStorage.removeItem("token"),
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        token: localStorage.getItem("token"),
        isAuthenticated: true,
        errors: null,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        isAuthenticated: false,
        token: localStorage.removeItem("token"),
      };
    }
    case GET_USER:{
      return {
        ...state,
        dataUser : payload
      }
    }
    case SIGN_OUT:
      localStorage.clear()
      return {
        ...state,
        token: null,
        isAuthenticated: false
      }
  }
};

export default auth;
