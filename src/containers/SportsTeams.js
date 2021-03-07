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



export default (SportsTeams)