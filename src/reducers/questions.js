import {
  RECEIVE_QUESIONS,
  ADD_QUESTIONS,
  ADD_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTIONS:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_ANSWER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: [...state[qid][answer].votes, authedUser],
          },
        },
      };
    default:
      return state;
  }
}
