
export const fetchUser = () => {
  return {
    type: 'FETCH_USER',
    payload: {
      name: 'William',
      age: 23,
    },
  };
};

export const setUserName = (name) => {
  return {
    type: 'SET_USER_NAME',
    payload: {
      name,
    },
  };
};

export const setUserAge = (age) => {
  return {
    type: 'SET_USER_AGE',
    payload: {
      age,
    },
  };
};
