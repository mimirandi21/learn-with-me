import { SET_GENERAL, START_ADDING_GENERAL } from '../actionTypes';

export default function GeneralFactsReducer(
  state = { general: [], showGeneralCard: false, requesting: false },
  action,
) {
  switch (action.type) {
    case START_ADDING_GENERAL:
      return {
        ...state,

        requesting: true,
      };

    case SET_GENERAL:
      return {
        ...state,
        general: action.general,
        requesting: false,
      };

    default:
      return state;
  }
}
