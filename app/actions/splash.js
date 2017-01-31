import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux'
import * as types from './types';
import store from '../../index.android';

function loginStatus(status) {
  return {
    type: types.LOGIN_STATUS,
    status
  }
}

export function getLoginStatus() {

  return async(dispatch) => {
    let token = await getOAuthToken();
    let success = await verifyToken(token);
    if (success == true) {
      dispatch(loginStatus(success));
    } else {
      console.log("Success: False");
      console.log("Token mismatch");
    }
    return success;
  }
}

async function getOAuthToken() {
  const TOKEN = '@OAuthToken:key';
  try {
    /* return await AsyncStorage.getItem(TOKEN); */  
    return '4iz-9d6cc0ca2a40a2f16345';  
  } catch (error) {
    console.log('Error in fetching OAuthToken: ' + error);
  }
}

async function verifyToken(token) {
  return fetch('http://localhost:8000/token/'+ token + '/1.json', {
      'method': 'get'
    })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData.success
    })
    .catch((error) => {
      console.log("Error in verifying token: " + error);
    });
}
