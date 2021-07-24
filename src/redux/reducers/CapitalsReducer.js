import { SET_CAPITALS, START_ADDING_CAPITALS } from '../actionTypes';

export default function CapitalsReducer(
  state = { capitals: [], showCapitalCard: false, requesting: false },
  action,
) {
  switch (action.type) {
    case START_ADDING_CAPITALS:
      return {
        ...state,

        requesting: true,
      };

    case SET_CAPITALS:
      return {
        ...state,
        capitals: action.capitals,
        requesting: false,
      };

    default:
      return state;
  }
}
