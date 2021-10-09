import { LOGIN_SUCCESS, AUTHENTICATE_USER, LOG_OUT } from "./actionTypes";
import URL from "../helper/urls";
import { fetch_cart_success } from "./cart";

export function authorizeuser(data) {
  console.log(data);
  const url = URL.login();
  return (dispatch) => {
    fetch(url, {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.success) {
          localStorage.setItem("token", data.data.token);
          setTimeout(() => {
            dispatch(login_success(data.data.user));
            dispatch(fetch_cart_success(data.data.user.cart));
          }, 50);
        }
      })
      .catch((err) => console.log("error", err));
  };
}
export function login_success(user) {
  // console.log(user_info);
  return {
    type: LOGIN_SUCCESS,
    user: user,
  };
}
export function AuthenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user: user,
  };
}

export function logout() {
  return {
    type: LOG_OUT,
  };
}
