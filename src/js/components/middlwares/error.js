export default () => next => action => {
  try {
    next(action);
  } catch (e) {
    console.error('Error ', e);
  }
};
