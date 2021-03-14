const URL = process.env.NODE_ENV === 'production' ? "https://afternoon-chamber-94748.herokuapp.com/generals" : "http://localhost:3001/generals"

export const getGeneral = () => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_GENERAL' })
        fetch("https://afternoon-chamber-94748.herokuapp.com/generals")
            .then(res => res.json())
            .then(JSON => {
                dispatch({ type: 'SET_GENERAL', general: {data: JSON} })
            })
    }
}