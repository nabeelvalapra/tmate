import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './app/reducers';

import SplashScreen from './app/screens/splash';
import CounterScreen from './app/screens/counter';


const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

/* Screen registration. */
const scenes = Actions.create(
    <Scene key="root" >
      <Scene key="splash" component={SplashScreen} hideNavBar="true"/>
      <Scene key="counter" component={CounterScreen} title="Counter"/>
    </Scene>
);
/* Screen registration ends. */


/* Store registration. */
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    )
  );
  return createStore(reducer, initialState, enhancer);
}
const store = configureStore({});
/* Store registration ends. */

const TmateApp = () => (
  <Provider store={store}>
    <Router scenes={scenes} />
  </Provider>
)
AppRegistry.registerComponent('Tmate', () => TmateApp);
