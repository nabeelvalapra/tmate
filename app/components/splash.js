import React, { Component } from 'react';
import { View, Button, Text, Navigator, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class Splash extends Component {
  render() {
    return (
      <Image source={require('../../static/rail-image.jpg')} style={styles.bgImage}>
        <Button onPress={Actions.counter} title="Hello"></Button>
      </Image>
    )
  }

  moveToCounter() {
    setTimeout(function () {
      Actions.counter()
    }, 5000)      
  }

  componentDidMount() {
    return this.moveToCounter()
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
