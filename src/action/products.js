import { ADD_ITEM, FETCH_PRODUCTS } from "./actionTypes";
import URL from "../helper/urls";

export function fetchproducts(type) {
  const url = URL.fetchproducts(type);
  return (dispatch) => {
    fetch(url, {
      // Adding method type
      method: "GET",
      // Adding body or contents to send
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setTimeout(() => {
            dispatch(fetch_products_success(data.products));
          }, 50);
        }
      })
      .catch((err) => console.log("error", err));
  };
}
export function fetch_products_success(products) {
  // console.log(user_info);
  return {
    type: FETCH_PRODUCTS,
    products: products,
  };
}

export function addproduct(product) {
  const url = URL.addProduct();
  const token = localStorage.getItem("token");
  return (dispatch) => {
    fetch(url, {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify(product),
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
      })
      .catch((err) => console.log("error", err));
  };
}
