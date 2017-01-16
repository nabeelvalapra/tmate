import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers';
import CounterContainer from '../containers/counter';


const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

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

const CounterApp = () => (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
)

export default CounterApp;
