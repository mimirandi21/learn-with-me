export const getGeneral = () => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_GENERAL' })
        fetch("http://localhost:3001/generals")
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'SET_GENERAL', teams: data })
            })
    }
}