import { SET_PAGE } from "../actions/currentPage";

export default function currentPage(state = "home", action) {
  switch (action.type) {
    case SET_PAGE:
      return action.page;
    default:
      return state;
  }
}
