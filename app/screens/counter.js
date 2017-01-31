import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipeAction from '../actions/recipe';


const Counter = (prop) => {
  const { loggedInStatus, recipeCount, addRecipe } = prop;
  return (
    <View>
      <Text> Hello, you are: {loggedInStatus} !!!</Text>
      <Text> Recipie Count: {recipeCount} </Text>
      <TouchableHighlight onPress={() => {addRecipe()}}>
        <Text> ADD </Text>
      </TouchableHighlight>
    </View>
  )
};

Counter.propTypes = {
  loggedInStatus: React.PropTypes.string,
  recipeCount: React.PropTypes.number,
  addRecipe: React.PropTypes.func
};

class CounterScreen extends Component {
  render() {
    return (
      <Counter
        loggedInStatus={this.props.loggedInStatus}
        recipeCount={this.props.recipeCount}
        addRecipe={this.props.addRecipe}
      />
    )
  }
}

export default connect(
  (state) => {
    return {
      recipeCount: state.recipeCount,
      loggedInStatus: state.loginStatus ? "True" : "False" 
    }
  } ,
  (dispatch) => {
    return {
      addRecipe: () => {
        dispatch(recipeAction.addRecipe())
      }
    }
  }
)(CounterScreen);
