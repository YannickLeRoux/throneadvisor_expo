import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';
import ThroneReducer from './thrones_reducer';

export default combineReducers({
  auth: AuthReducer,
  thrones: ThroneReducer
});
