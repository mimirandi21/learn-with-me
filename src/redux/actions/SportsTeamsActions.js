const URL = process.env.NODE_ENV === 'production' ? "https://afternoon-chamber-94748.herokuapp.com/sports_teams" : "http://localhost:3001/sports_teams"

export const getSportsTeams = (abbr) => {
    return (dispatch) => {
        console.log(abbr)
        dispatch({ type: 'START_ADDING_TEAMS' })
        fetch("https://afternoon-chamber-94748.herokuapp.com/sports_teams")
            .then(res => res.json())
            .then(JSON => {
                dispatch({ type: 'SET_TEAMS', teams: {data: JSON}})
            })
    }
}