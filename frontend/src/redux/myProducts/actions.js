import {
  FETCH_MY_PRODUCTS_REQUEST,
  FETCH_MY_PRODUCTS_SUCCESS,
  FETCH_MY_PRODUCTS_FAILURE,
  LIST_PRODUCT_REQUEST,
  LIST_PRODUCT_SUCCESS,
  LIST_PRODUCT_FAILURE,
} from "./types";
import axios from "axios";
// =============== my products =====================
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

// ========================== list product ============================
const listProductRequest = () => {
  return {
    type: LIST_PRODUCT_REQUEST,
  };
};

const listProductSuccess = (product) => {
  return {
    type: LIST_PRODUCT_SUCCESS,
  };
};

const listProductFailure = (error) => {
  return {
    type: LIST_PRODUCT_FAILURE,
    paylod: error,
  };
};

const fetchMyProducts = () => {
  return async (dispatch) => {
    dispatch(fetchMyProductsRequest());
    try {
      const response = await axios.get("http://localhost:8000/api/products/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = response.data;
      dispatch(fetchMyProductsSuccess(data));
    } catch (err) {
      console.log(err.message);
      dispatch(fetchMyProductsFailure(err.message));
    }
  };
};

const uploadProduct = (payload) => {
  return async (dispatch) => {
    dispatch(listProductRequest());
    console.log("the payload", payload);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/products/",
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      console.log(data);
      dispatch(listProductSuccess(data));
    } catch (err) {
      console.log(err.message);
      dispatch(listProductFailure(err.message));
    }
  };
};

export { fetchMyProducts, uploadProduct };
