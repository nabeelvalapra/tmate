import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { recipeCount: 0}
  }

  addRecipeCount() {
    this.setState({recipeCount: this.state.recipeCount + 1});
  }

  render() {
    return (
      <View>
        <Text> Hello </Text>
        <Text> Recipie Count: {this.state.recipeCount} </Text>
        <TouchableHighlight onPress={() => {this.addRecipeCount()}}>
          <Text>
            ADD
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}
export default connect(() => { return {} } , mapDispatchToProps)(CounterContainer);
