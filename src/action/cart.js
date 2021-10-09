import { FETCH_CART, REMOVE_CART_ITEM, ADD_CART_ITEM } from "./actionTypes";
import URL from "../helper/urls";
import { login_success } from "./auth";

export function addTocart(id, qty) {
  const url = URL.addTocart(id, qty);
  console.log("added to cart");
  const token = localStorage.getItem("token");
  return (dispatch) => {
    fetch(url, {
      // Adding method type
      method: "GET",
      // Adding body or contents to send
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(Add_item_success(data.item));
        }
      })
      .catch((err) => console.log("error", err));
  };
}

export function fetchcart() {
  const url = URL.fetchCart();
  const token = localStorage.getItem("token");
  return (dispatch) => {
    fetch(url, {
      // Adding method type
      method: "GET",
      // Adding body or contents to send
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(fetch_cart_success(data.cart));
        }
      })
      .catch((err) => console.log("error", err));
  };
}

export function removeFromCart(id) {
  const url = URL.removeFromCart(id);
  const token = localStorage.getItem("token");
  return (dispatch) => {
    fetch(url, {
      // Adding method type
      method: "GET",
      // Adding body or contents to send
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(Remove_item_success(id));
        }
      })
      .catch((err) => console.log("error", err));
  };
}

export function decreaseCount(id) {
  const url = URL.decreaseCount(id);
  const token = localStorage.getItem("token");
  return (dispatch) => {
    fetch(url, {
      // Adding method type
      method: "GET",
      // Adding body or contents to send
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setTimeout(() => {
            dispatch(login_success(data.user));
          }, 50);
        }
      })
      .catch((err) => console.log("error", err));
  };
}

export function increaseCount(id) {
  const url = URL.increaseCount(id);
  const token = localStorage.getItem("token");
  return (dispatch) => {
    fetch(url, {
      // Adding method type
      method: "GET",
      // Adding body or contents to send
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setTimeout(() => {
            dispatch(login_success(data.user));
          }, 50);
        }
      })
      .catch((err) => console.log("error", err));
  };
}

export function fetch_cart_success(cart) {
  return {
    type: FETCH_CART,
    cart: cart,
  };
}

export function Remove_item_success(id) {
  return {
    type: REMOVE_CART_ITEM,
    id: id,
  };
}

export function Add_item_success(item) {
  return {
    type: ADD_CART_ITEM,
    item: item,
  };
}
