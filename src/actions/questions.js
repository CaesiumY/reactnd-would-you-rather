import { saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESIONS = "RECEIVE_QUESIONS";
export const ADD_QUESTIONS = "ADD_QUESTIONS";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTIONS,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText,
    })
      .then((q) => dispatch(addQuestion(q))) // TODO - fill out the rest of dispatching actions
      .then(() => dispatch(hideLoading()));
  };
}
