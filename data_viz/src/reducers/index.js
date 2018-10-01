import {combineReducers} from 'redux';
import browser from './modules/browser';
import user from './modules/user';

export default combineReducers({
  browser,
  user
});