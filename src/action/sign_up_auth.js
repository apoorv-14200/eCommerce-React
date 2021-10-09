import { SIGNUP_SUCCESS } from "./actionTypes";
import URL from "../helper/urls";

const url = URL.signup();

export function createuser(data) {
  return (dispatch) => {
    fetch(url, {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        confirmpassword: data.confirmpassword,
        name: data.name,
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
          setTimeout(() => {
            localStorage.setItem("token", data.data.token);
            dispatch(signup_success(data.data.user));
          }, 50);
        }
      })
      .catch((err) => console.log("error", err));
  };
}

export function signup_success(user) {
  // console.log(user_info);
  return {
    type: SIGNUP_SUCCESS,
    user: user,
  };
}
