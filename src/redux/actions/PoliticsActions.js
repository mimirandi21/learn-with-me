const URL = process.env.NODE_ENV === 'production'
  ? 'https://afternoon-chamber-94748.herokuapp.com/politics'
  : 'http://localhost:3001/politics';

export const getPolitics = () => (dispatch) => {
  dispatch({ type: 'START_ADDING_POLITICS' });
  fetch('https://afternoon-chamber-94748.herokuapp.com/politics')
    .then((res) => res.json())
    .then((JSON) => {
      dispatch({ type: 'SET_POLITICS', politics: { data: JSON } });
    });
};
