import React, { Component } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class ScrollTest extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'First' },
      { key: '2', title: 'Second' },
    ],
  };
  animatedValue = new Animated.Value(0)

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar {...props} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return <View style={[ styles.page, { backgroundColor: '#ff4081' } ]} />;
      case '2':
        return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]} />;
      default:
        return null;
    }
  };

  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 260]
    })

    return (
      <View style={{ flex: 1, marginTop: 60 }}>
        <Animated.View style={[{ width: 50, height: 50, backgroundColor: 'red' }, {marginLeft} ]} />
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onRequestChangeTab={this._handleChangeTab}
        />
      </View>
    );
  }
}
