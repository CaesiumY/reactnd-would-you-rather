import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";
// import { setAuthedUser } from "./authedUser";

// NOTE - below this comment makes not login is default
// const authedUser = "johndoe";

export function hadleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      // NOTE - below this comment makes not login is default
      // dispatch(setAuthedUser(authedUser));
      dispatch(hideLoading());
    });
  };
}
