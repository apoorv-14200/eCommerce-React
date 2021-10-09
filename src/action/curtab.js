import { SET_CURRENT_TAB } from "./actionTypes";

export function setTab(tab) {
  return {
    type: SET_CURRENT_TAB,
    tab: tab,
  };
}
