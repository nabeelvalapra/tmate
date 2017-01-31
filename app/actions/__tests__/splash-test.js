import mockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import { loginStatus, getLoginStatus } from '../splash';


it("Login Action", () => {
  fetch.mockResponse('{"success": true}');
  const expectedActions = [
    {type: 'LOGIN_STATUS', status: true}
  ];
  const store = mockStore({});
  return store.dispatch(getLoginStatus()).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  })
})
