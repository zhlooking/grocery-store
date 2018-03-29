
export default (state = {
  fetching: false,
  fetched: false,
  users: {},
  error: null,
}, action) => {
  switch (action.type) {
    case 'FETCH_GUESTS_PENDING': {
      return { ...state, fetching: true };
    }
    case 'FETCH_GUESTS_FULFILLED': {
      return {
        ...state,
        fetched: true,
        fetching: false,
        users: action.payload,
      };
    }
    case 'FETCH_GUESTS_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }
    default:
      return state;
  }
};
