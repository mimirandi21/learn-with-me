import { SET_CAPITALS } from '../actionTypes'
import { START_ADDING_CAPITALS } from '../actionTypes'

export default function CapitalsReducer(state = {capitals: [], showCapitalsCard: false, requesting: false}, action) {
    switch(action.type) {

        case START_ADDING_CAPITALS:
            return {
                ...state,
                capitals: [...state.capitals],
                requesting: true
            }

        case SET_CAPITALS:
            return {
                ...state,
                capitals: action.capitals,
                requesting: false
            }

        default:
            return state
    }
}