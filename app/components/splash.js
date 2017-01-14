import React, { Component } from 'react';
import { View, Text, Navigator, StyleSheet, Image } from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <Image source={require('../../static/rail-image.jpg')} style={styles.bgImage}/>
    )
  }
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    height: null,
    width: null,
    justifyContent: 'center',
    resizeMode: 'stretch'
  }
});
