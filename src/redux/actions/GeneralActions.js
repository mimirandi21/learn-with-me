const URL = process.env.NODE_ENV === 'production' ? "https://afternoon-chamber-94748.herokuapp.com/generals" : "http://localhost:3001/generals"

export const getGeneral = () => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_GENERAL' })
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'SET_GENERAL', teams: data })
            })
    }
}