import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { addQuestionToUser, addAnswerToUser } from "./users";

export const RECEIVE_QUESIONS = "RECEIVE_QUESIONS";
export const ADD_QUESTIONS = "ADD_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER";

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

export function addAnswer(authedUser, qid, answer) {
  return {
    type: ADD_ANSWER,
    authedUser,
    qid,
    answer,
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
      .then((q) => {
        dispatch(addQuestion(q));
        dispatch(addQuestionToUser(q));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function handleAddAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestionAnswer(authedUser, qid, answer)
      .then(() => {
        // TODO - need actions
        dispatch(addAnswer(authedUser, qid, answer));
        dispatch(addAnswerToUser(authedUser, qid, answer));
      })
      .then(() => dispatch(hideLoading()));
  };
}
