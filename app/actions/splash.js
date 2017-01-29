import * as types from './types';

export function loginStatus(status) {
  return {
    type: types.LOGIN_STATUS,
    status: status
  }
}
