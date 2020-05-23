import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { setAuthedUser } from "./authedUser";

// FIXME - after TEST, it should be fixed.
const authedUser = "johndoe";

export function hadleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      // FIXME - after TEST, it should be fixed.
      dispatch(setAuthedUser(authedUser));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
