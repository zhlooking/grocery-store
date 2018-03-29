
export default (state = {
  name: 'Micheal',
  age: 20,
}, action) => {
  switch (action.type) {
    case 'FETCH_USER': {
      return { ...state, ...action.payload };
    }
    case 'SET_USER_NAME': {
      return { ...state, ...action.payload };
    }
    case 'SET_USER_AGE': {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};
