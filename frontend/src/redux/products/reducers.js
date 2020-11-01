import {
  FETCH_PUBLIC_PRODUCTS_REQUEST,
  FETCH_PUBLIC_PRODUCTS_SUCCESS,
  FETCH_PUBLIC_PRODUCTS_FAILURE,
} from "./types";

const initialState = {
  loading: false,
  publicProducts: [],
  error: "",
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

    default:
      return state;
  }
};

export default publicProductsReducer;
