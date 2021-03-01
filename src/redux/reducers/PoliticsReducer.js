import { SET_POLITICS } from '../actionTypes'
import { START_ADDING_POLITICS } from '../actionTypes'

export default function PoliticsReducer(state = {politics: [], showPoliticsCard: false, requesting: false}, action) {
    switch(action.type) {

        case START_ADDING_POLITICS:
            return {
                ...state,
                
                requesting: true
            }

        case SET_POLITICS:
            return {
                ...state,
                politics: action.politics,
                requesting: false
            }

        default:
            return state
    }
}