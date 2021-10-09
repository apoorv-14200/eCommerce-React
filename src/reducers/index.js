import { combineReducers } from "redux";
import auth from "./auth";
import products from "./products";
import cart from "./cart";
import tab from "./tab";
export default combineReducers({
  auth,
  products,
  cart,
  tab,
});
