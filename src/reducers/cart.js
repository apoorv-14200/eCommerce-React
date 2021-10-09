import {
  FETCH_CART,
  REMOVE_CART_ITEM,
  ADD_CART_ITEM,
  LOG_OUT,
  LOGIN_SUCCESS,
} from "../action/actionTypes";

const initialCartState = [];

export default function cart(state = initialCartState, action) {
  switch (action.type) {
    case FETCH_CART: {
      return action.cart;
    }
    case REMOVE_CART_ITEM: {
      console.log("CART UPDATED");
      let filtered = state.filter((item) => item._id != action.id);
      return filtered;
    }
    case ADD_CART_ITEM: {
      console.log("CART UPDATED");
      return [action.item, ...state];
    }
    case LOG_OUT: {
      return [];
    }
    default: {
      return state;
    }
  }
}
