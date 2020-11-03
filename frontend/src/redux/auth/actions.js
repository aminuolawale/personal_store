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
import axios from "axios";

const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

const signupSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};

const signupFailure = (err) => {
  return {
    type: SIGNUP_FAILURE,
    payload: err,
  };
};

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

const loginFailure = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err,
  };
};

const logoutRequest = () => {
  return {
    type: LOGOUT,
  };
};

const getAccountRequest = () => {
  return {
    type: GET_ACCOUNT_REQUEST,
  };
};

const getAccountSuccess = (account) => {
  return {
    type: GET_ACCOUNT_SUCCESS,
    payload: account,
  };
};

const getAccountFailure = (error) => {
  return {
    type: GET_ACCOUNT_FAILURE,
    payload: error,
  };
};

const signup = (requestData) => {
  return async (dispatch) => {
    const url = "http://localhost:8000/api/users/signup/";
    try {
      dispatch(signupRequest());
      const response = await axios.post(url, requestData, {
        headers: { "Content-Type": "application/json" },
      });
      const data = response.data;
      console.log("the response data", data);
      dispatch(signupSuccess(data));
    } catch (err) {
      console.log(err.message);
      dispatch(signupFailure(err.message));
    }
  };
};

const login = (requestData) => {
  return async (dispatch) => {
    const url = "http://localhost:8000/api/token/";
    try {
      dispatch(loginRequest());
      const response = await axios.post(url, requestData, {
        headers: { "Content-Type": "application/json" },
      });
      const data = response.data;
      console.log("the response data", data);
      dispatch(loginSuccess());
      localStorage.setItem("token", data.access);
    } catch (err) {
      console.log(err.message);
      dispatch(loginFailure(err.message));
    }
  };
};

const logout = () => {
  return (dispatch) => {
    console.log("loolkajdjl");
    dispatch(logoutRequest());
    localStorage.setItem("token", null);
  };
};

const getAccount = () => {
  return async (dispatch) => {
    dispatch(getAccountRequest());
    try {
      const response = await axios.get(
        "http://localhost:8000/api/users/profile/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = response.data;
      dispatch(getAccountSuccess(data));
    } catch (err) {
      console.log(err.message);
      dispatch(getAccountFailure(err.message));
    }
  };
};

export { signup, login, logout };
