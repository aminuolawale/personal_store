import { combineReducers } from "redux";
import publicProductsReducer from "./products/reducer";
import myProductsReducer from "./myProducts/reducer";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  publicProducts: publicProductsReducer,
  products: myProductsReducer,
  auth: authReducer,
});

export default rootReducer;
