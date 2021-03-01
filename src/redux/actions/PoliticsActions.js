export const getPolitics = () => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_POLITICS' })
        fetch("http://localhost:3001/politics")
            .then(res => res.json())
            .then(JSON => {
                dispatch({ type: 'SET_POLITICS', politics: {data: JSON} })
            })
    }
}