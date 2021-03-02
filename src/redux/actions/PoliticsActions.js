const URL = process.env.NODE_ENV === 'production' ? "https://afternoon-chamber-94748.herokuapp.com/politics" : "http://localhost:3001/politics"

export const getPolitics = () => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_POLITICS' })
        fetch(URL)
            .then(res => res.json())
            .then(JSON => {
                dispatch({ type: 'SET_POLITICS', politics: {data: JSON} })
            })
    }
}