import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux'
import * as splashAction from '../actions/splash';
import { connect } from 'react-redux';


class SplashScreen extends Component {

  render() {
    return (
      <Image source={require('../static/rail-image.jpg')} style={styles.bgImage} />
    )
  }

  async componentDidMount() {
    let token = await this._getOAuthToken();
    token = '4iz-9d6cc0ca2a40a2f16345';
    if (token !== null) {
      let success = await this._verifyToken(token);
      if (success == true) {
         console.log('Token :' + token);
         this.props.loginStatus(true);
         Actions.counter();      
      } 
    } else {
      console.log('Login Failed !!!');
      Actions.counter(); 
    }
  }

  async _getOAuthToken() {
    const TOKEN = '@OAuthToken:key';
    try {
      return await AsyncStorage.getItem(TOKEN);
    } catch (error) {
      console.log('Error in fetching OAuthToken: ' + error);
    }
  }
  
  async _verifyToken(token) {
    return fetch('http://localhost:8000/token/'+ token + '/1.json', {
        'method': 'get'
      })
      .then((response) => response.json())
      .then((responseData) => {
        return responseData.success
      })
      .catch((error) => {
        console.log("ERROR: " + error);
      });
  }
}

export default connect(
  null,
  (dispatch) => {
    return {
      loginStatus: (status) =>
        dispatch(splashAction.loginStatus(status))
    }
  }
)(SplashScreen);

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    height: null,
    width: null,
    justifyContent: 'center',
    resizeMode: 'stretch'
  }
});
