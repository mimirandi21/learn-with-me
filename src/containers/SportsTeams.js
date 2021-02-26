import SportsMap from "../components/SportsMap"
import React from 'react'
import { connect } from "react-redux"

class SportsTeams extends React.Component {

    render() {
        return(
            <div>
                <SportsMap/>
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