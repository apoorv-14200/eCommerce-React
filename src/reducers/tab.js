import { SET_CURRENT_TAB } from "../action/actionTypes";

const initialTabState = "Home";

export default function tab(state = initialTabState, action) {
  switch (action.type) {
    case SET_CURRENT_TAB: {
      return action.tab;
    }
    default: {
      return state;
    }
  }
}
