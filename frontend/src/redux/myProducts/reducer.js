import {
  FETCH_MY_PRODUCTS_REQUEST,
  FETCH_MY_PRODUCTS_SUCCESS,
  FETCH_MY_PRODUCTS_FAILURE,
  LIST_PRODUCT_REQUEST,
  LIST_PRODUCT_SUCCESS,
  LIST_PRODUCT_FAILURE,
} from "./types";

const initialState = {
  loading: false,
  error: "",
  products: [],
  productListed: false,
};

const myProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MY_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        productListed: false,
      };
    case FETCH_MY_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        productListed: false,
        error: "",
      };
    case FETCH_MY_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload,
        productListed: false,
      };
    case LIST_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        productListed: false,
      };
    case LIST_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productListed: true,
        error: "",
      };
    case LIST_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        productListed: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default myProductsReducer;
