import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducer from './reducers';
import error from './middlwares/error';

const middleware = applyMiddleware(thunk, createLogger(), promise(), error);

export default createStore(
  reducer,
  middleware,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
