import { combineReducers } from 'redux';
import { apodReducer } from './apodReducer';
import { apodErrorReducer } from './apodErrorReducer';
import { issReducer } from './issReducer';
import { issErrorReducer } from './issErrorReducer';
import { asteroidsReducer } from './asteroidsReducer';
import { asteroidsErrorReducer } from './asteroidsErrorReducer';
import { planetFactsReducer } from './planetFactsReducer';

const rootReducer = combineReducers({
  apod: apodReducer,
  apodError: apodErrorReducer,
  iss: issReducer,
  issError: issErrorReducer,
  asteroids: asteroidsReducer,
  asteroidsError: asteroidsErrorReducer,
  planetFacts: planetFactsReducer
});

export default rootReducer;