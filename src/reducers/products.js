import { FETCH_PRODUCTS } from "../action/actionTypes";

const initialProductState = [];

export default function products(state = initialProductState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return action.products;
    }
    default: {
      return state;
    }
  }
}
