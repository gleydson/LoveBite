import { combineReducers } from 'redux';

import restaurants from './restaurants';
import settings from './settings';

export default combineReducers({
  restaurants,
  settings,
});
