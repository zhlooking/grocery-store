
export const bodyReducer = (state = {
  dirty: false,
  bodyLevel: 5,
}, action) => {
  switch (action.type) {
    case 'PLAY':
      return { ...state, dirty: true, bodyLevel: state.bodyLevel + 1 };
    case 'SLEEP':
      return { ...state, bodyLevel: state.bodyLevel - 1 };
    case 'WASH':
      return { ...state, dirty: false };
    case 'PEE':
      throw new Error('ugh, --> pee');
    default:
      return state;
  }
};

export const ballsReducer = (state = {
  balls: 0,
  name: 'Perry',
}, action) => {
  switch (action.type) {
    case 'INCREASE_BALL':
      return { ...state, balls: state.balls + 1 };
    case 'DECREASE_BALL':
      return { ...state, balls: state.balls - 1 };
    default:
      return state;
  }
};
