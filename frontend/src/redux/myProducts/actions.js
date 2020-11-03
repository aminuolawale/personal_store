import {
  FETCH_MY_PRODUCTS_REQUEST,
  FETCH_MY_PRODUCTS_SUCCESS,
  FETCH_MY_PRODUCTS_FAILURE,
} from "./types";
import axios from "axios";

const fetchMyProductsRequest = () => {
  return {
    type: FETCH_MY_PRODUCTS_REQUEST,
  };
};

const fetchMyProductsSuccess = (products) => {
  return {
    type: FETCH_MY_PRODUCTS_SUCCESS,
    payload: products,
  };
};

const fetchMyProductsFailure = (error) => {
  return {
    type: FETCH_MY_PRODUCTS_FAILURE,
    paylod: error,
  };
};

const fetchMyProducts = () => {
  return async (dispatch) => {
    dispatch(fetchMyProductsRequest());
    try {
      const response = await axios.get("http://localhost:8000/api/products/", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = response.data;
      dispatch(fetchMyProductsSuccess(data));
    } catch (err) {
      console.log(err.message);
      dispatch(fetchMyProductsFailure(err.message));
    }
  };
};

export { fetchMyProducts };
