import { combineReducers } from 'redux';
import * as recipeReducers from './recipes';

export default combineReducers(Object.assign({},
  recipeReducers,
));
