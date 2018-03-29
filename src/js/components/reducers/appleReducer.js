
export default (state = {
  dirty: true,
  remainingBites: 5,
  color: 'red',
}, action) => {
  switch (action.type) {
    case 'WASH':
      return {
        ...state, dirty: false,
      };
    case 'EAT':
      return {
        ...state, remainingBites: Math.max(0, state.remainingBites - action.bites),
      };
    case 'ROT':
      return {
        ...state, remainingBites: 0, color: 'brown', dirty: true,
      };
    default:
      return state;
  }
};
