import createReducers from '../lib/createReducer';
import * as types from '../actions/types';

export const loginStatus = createReducers(false, {
  [types.LOGIN_STATUS](state, action){
    return action.status;
  }
});
