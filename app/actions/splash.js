import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux'
import * as types from './types';
import store from '../../index.android';

export function loginStatus(status) {
  return {
    type: types.LOGIN_STATUS,
    status
  }
}

export function getLoginStatus() {

  return async(dispatch) => {
    let token = await getOAuthToken();
    let success = await verifyToken(token);
    dispatch(loginStatus(success));
    if (success == false) {
      console.log("Token mismatch");
    }
    return success;
  }
}

async function getOAuthToken() {
  const TOKEN = '@OAuthToken:key';
  try {
    return await AsyncStorage.getItem(TOKEN);   
  } catch (error) {
    console.log('Error in fetching OAuthToken from AsyncStorage: ' + error);
  }
}

async function verifyToken(token) {
  return fetch(
    'http://localhost:8000/token/'+ token + '/1.json',
    {'method': 'get'})
    .then((response) => response.json())
    .then((responseData) => {
      return responseData.success
    })
    .catch((error) => {
      console.log("Error in verifying token: " + error);
    });
}
