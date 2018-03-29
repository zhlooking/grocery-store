import { combineReducers } from 'redux';
import userReducer from './userReducer';
import guestsReducer from './guestsReducer';
import { bodyReducer, ballsReducer } from './dogReducer';
import appleReducer from './appleReducer';

export default combineReducers({
  user: userReducer,
  guests: guestsReducer,
  body: bodyReducer,
  balls: ballsReducer,
  apple: appleReducer,
});
