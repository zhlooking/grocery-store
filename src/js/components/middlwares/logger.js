export default () => next => action => {
  console.log('--> action: ', action);
  next(action);
};
