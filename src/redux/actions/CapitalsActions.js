const URL = process.env.NODE_ENV === 'production' ? "https://afternoon-chamber-94748.herokuapp.com/capitals" : "http://localhost:3001/capitals"


export const getCapitals = () => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_CAPITALS' })
        fetch(URL)
            .then(res => res.json())
            .then(JSON => {
                dispatch({ type: 'SET_CAPITALS', capitals: {data: JSON} })
            })
    }
}