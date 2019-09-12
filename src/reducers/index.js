import { combineReducers } from 'redux';
import { apodReducer } from './apodReducer';
import { apodErrorReducer } from './apodErrorReducer';
import { issReducer } from './issReducer';
import { issErrorReducer } from './issErrorReducer';
import { asteroidsReducer } from './asteroidsReducer';
import { asteroidsErrorReducer } from './asteroidsErrorReducer';

const rootReducer = combineReducers({
  apod: apodReducer,
  apodError: apodErrorReducer,
  iss: issReducer,
  issError: issErrorReducer,
  asteroids: asteroidsReducer,
  asteroidsError: asteroidsErrorReducer
});

export default rootReducer;