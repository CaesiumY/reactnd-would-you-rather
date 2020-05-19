import { RECEIVE_QUESIONS } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESIONS:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
}
