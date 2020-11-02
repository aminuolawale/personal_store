import { combineReducers } from "redux";
import publicProductsReducer from "./products/reducer";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  publicProducts: publicProductsReducer,
  auth: authReducer,
});

export default rootReducer;
