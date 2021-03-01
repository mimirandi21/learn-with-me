export const getSportsTeams = (abbr) => {
    return (dispatch) => {
        console.log(abbr)
        dispatch({ type: 'START_ADDING_TEAMS' })
        fetch("http://localhost:3001/sports_teams")
            .then(res => res.json())
            .then(JSON => {
                dispatch({ type: 'SET_TEAMS', teams: {data: JSON}})
            })
    }
}