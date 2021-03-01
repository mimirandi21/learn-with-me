import SportsMap from "../components/SportsMap"
import React from 'react'
import { connect } from "react-redux"
import { getSportsTeams } from '../redux/actions/SportsTeamsActions'

class SportsTeams extends React.Component {

    render() {
        console.log(this.props)
        return(
            <div>
                <SportsMap />
            </div>
        )
    }
}

const mSTP = state => {
    return {
        teams: state.teams
    }
}

export default (SportsTeams)