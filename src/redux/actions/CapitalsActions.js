export const getCapitals = () => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_CAPITALS' })
        fetch("http://localhost:3001/capitals")
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'SET_CAPITALS', teams: data })
            })
    }
}