import { LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_FAILED, REGISTER_SUCCESS } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  errors: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        errors: null,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isAuthenticated: false,
        token: localStorage.removeItem("token")
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        errors: null,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        isAuthenticated: false,
        token: localStorage.removeItem("token")
      };
    }
  }
};

export default auth;