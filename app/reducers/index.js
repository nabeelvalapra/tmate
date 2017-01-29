import { combineReducers } from 'redux';
import * as recipeReducers from './recipe';
import * as splashReducers from './splash';

export default combineReducers(Object.assign({},
  recipeReducers, splashReducers
));
