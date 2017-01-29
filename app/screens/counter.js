import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recipeAction from '../actions/recipe';


class CounterScreen extends Component {
  render() {
    let props = this.props;
    return (
      <View>
        <Text> Hello </Text>
        <Text> Recipie Count: {props.recipeCount} </Text>
        <TouchableHighlight onPress={() => {props.addRecipe()}}>
          <Text> ADD </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default connect(
  (state) => {
    return {
      recipeCount: state.recipeCount
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
