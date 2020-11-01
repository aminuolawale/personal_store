import { createStore, applyMiddleware } from "redux";
import publicProductsReducer from "./products/reducers";
import thunkMiddleware from "redux-thunk";

const store = createStore(
  publicProductsReducer,
  applyMiddleware(thunkMiddleware)
);
const unsubscribe = store.subscribe(() => {});

export default store;
