import { SET_TEAMS } from '../actionTypes'
import { START_ADDING_TEAMS } from '../actionTypes'

export default function SportsTeamsReducer(state = {
                                teams: [],
                                showSportsCard: false,
                                requesting: false
                            }, action) {
    switch(action.type) {

        case START_ADDING_TEAMS:
            return {
                ...state,
                requesting: true
            }

        case SET_TEAMS:
            return {
                ...state,
                teams: action.teams,
                requesting: false
            }

        default:
            return state
    }
}
