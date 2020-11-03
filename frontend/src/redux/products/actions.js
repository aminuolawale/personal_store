import {
  FETCH_PUBLIC_PRODUCTS_REQUEST,
  FETCH_PUBLIC_PRODUCTS_SUCCESS,
  FETCH_PUBLIC_PRODUCTS_FAILURE,
  FETCH_MY_PRODUCTS_REQUEST,
  FETCH_MY_PRODUCTS_SUCCESS,
  FETCH_MY_PRODUCTS_FAILURE,
} from "./types";
import axios from "axios";

const fetchPublicProductsRequest = () => {
  return {
    type: FETCH_PUBLIC_PRODUCTS_REQUEST,
  };
};

const fetchPublicProductsSuccess = (publicProducts) => {
  return {
    type: FETCH_PUBLIC_PRODUCTS_SUCCESS,
    payload: publicProducts,
  };
};

const fetchPublicProductsFailure = (error) => {
  return {
    type: FETCH_PUBLIC_PRODUCTS_FAILURE,
    paylod: error,
  };
};

const fetchPublicProducts = () => {
  return async (dispatch) => {
    dispatch(fetchPublicProductsRequest());
    try {
      const response = await axios.get(
        "http://localhost:8000/api/public_products/"
      );
      const data = response.data;
      dispatch(fetchPublicProductsSuccess(data));
    } catch (err) {
      console.log(err.message);
      dispatch(fetchPublicProductsFailure(err.message));
    }
  };
};

export { fetchPublicProducts };
