import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  GET_ACCOUNT_REQUEST,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAILURE,
} from "./types";

const initialState = {
  account: null,
  loggedIn: localStorage.getItem("token") ? true : false,
  loading: false,
  error: "",
  signedUp: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        signedUp: true,
        error: "",
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        error: "",
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        loggedIn: false,
      };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        user: null,
        loggedIn: false,
        signedUp: false,
      };
    case GET_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        account: action.payload,
        error: "",
        loggedIn: true,
      };
    case GET_ACCOUNT_FAILURE:
      localStorage.setItem("token", null);
      return {
        ...state,
        loading: false,
        error: action.payload,
        account: null,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
