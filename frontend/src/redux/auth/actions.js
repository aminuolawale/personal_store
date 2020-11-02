import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
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
      dispatch(signupSuccess());
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

export { signup, login, logout };
