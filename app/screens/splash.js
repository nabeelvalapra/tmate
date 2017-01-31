import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux'
import * as splashAction from '../actions/splash';
import { connect } from 'react-redux';
import store from '../../index.android.js';


class SplashScreen extends Component {

  render() {
    return (
      <Image source={require('../static/rail-image.jpg')} style={styles.bgImage} />
    )
  }

  componentDidMount() {
    this.props.dispatch(splashAction.getLoginStatus())
      .then((success) => {
        if (success == true) {
          Actions.counter()
        } else {
          console.log("Login not successfull");
          Actions.counter()
        }
      });
  }
}


export default connect(null, null)(SplashScreen);

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    height: null,
    width: null,
    justifyContent: 'center',
    resizeMode: 'stretch'
  }
});
