import { combineReducers } from 'redux';
import alarmsReducer from './alarms';

const rootReducer = combineReducers({
  alarms: alarmsReducer
});

export default rootReducer;
