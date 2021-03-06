import {
  FETCH_PUBLIC_PRODUCTS_REQUEST,
  FETCH_PUBLIC_PRODUCTS_SUCCESS,
  FETCH_PUBLIC_PRODUCTS_FAILURE,
  FETCH_MY_PRODUCTS_REQUEST,
  FETCH_MY_PRODUCTS_SUCCESS,
  FETCH_MY_PRODUCTS_FAILURE,
} from "./types";

const initialState = {
  loading: false,
  publicProducts: [],
  error: "",
  products: [],
};

const publicProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PUBLIC_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PUBLIC_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        publicProducts: action.payload,
        error: "",
      };
    case FETCH_PUBLIC_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        publicProducts: [],
        error: action.payload,
      };
    case FETCH_MY_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MY_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: "",
      };
    case FETCH_MY_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default publicProductsReducer;
