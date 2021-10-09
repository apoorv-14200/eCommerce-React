import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
} from "../action/actionTypes";
const initialAuthState = {
  user: null,
};

export default function auth(state = initialAuthState, action) {
  console.log("action----->", action);
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        user: action.user,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        user: action.user,
      };
    }
    case AUTHENTICATE_USER: {
      return {
        user: action.user,
      };
    }
    case LOG_OUT: {
      return {
        user: null,
      };
    }
    default: {
      return state;
    }
  }
}
