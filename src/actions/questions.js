export const RECEIVE_QUESIONS = "RECEIVE_QUESIONS";
export const ADD_QUESTIONS = "ADD_QUESTIONS";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESIONS,
    questions,
  };
}
