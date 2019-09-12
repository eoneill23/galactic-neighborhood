import { combineReducers } from 'redux';
import { apodReducer } from './apodReducer';

const rootReducer = combineReducers({
  apod: apodReducer
});

export default rootReducer;