export const fetchGuests = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_GUESTS_PENDING' });
    fetch('https://randomuser.me/api/?results=10')
      .then(resp => resp.json())
      .then(result => {
        dispatch({ type: 'FETCH_GUESTS_FULFILLED', payload: result.results });
      })
      .catch((e) => {
        dispatch({ type: 'FETCH_GUESTS_REJECTED', payload: e });
      });
  };
};
