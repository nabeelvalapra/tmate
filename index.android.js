import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View, Image
} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

import Splash from './app/components/splash';


const scenes = Actions.create(
    <Scene key="root" >
      <Scene key="splash" component={Splash} hideNavBar="true"/>
    </Scene>
);

export default class Tmate extends Component {
  render() {
    return <Router scenes={scenes} />
  }
}

AppRegistry.registerComponent('Tmate', () => Tmate);
