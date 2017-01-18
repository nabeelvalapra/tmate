import createReducers from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedRecipes = createReducers({}, {
  
});

export const recipeCount = createReducers(0, {
  [types.ADD_RECIPE](state, action){
    return state + 10;
  }
});
