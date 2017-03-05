'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Easing,
    Animated,
    TouchableHighlight,
    ScrollView
} from 'react-native';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;


export default class AniEase extends Component {
  constructor () {
    super()
    this.animatedValue = new Animated.Value(0),
    this.scrollY = new Animated.Value(0)
  }
  
  animate (easing) {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 1000,
        easing
      }
    ).start()
  }
  
  render () {
    const headerHeight = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [50, 0],
      extrapolate: 'clamp',
    });

    const imageOpacity = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });

    const imageTranslate = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });

    const titleScale = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: 'clamp',
    });

    const titleTranslate = this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: 'clamp',
    });
    
    const onScroll = () => {
      return Animated.event(
        [{nativeEvent: {contentOffset: {y: this.scrollY}}}]
      )
    }

    return (
      <View style={styles.container}>
        <Animated.View style={[
          styles.block,
          { height: headerHeight },
          { opacity: imageOpacity, transform: [{translateY: imageTranslate}] }
        ]} />
        <Text style={{textAlign: 'center'}}>Scroll up for more animations</Text>
        <ScrollView
          onScroll={
            onScroll()
          }
        >
          <Button easing='Bounce' onPress={this.animate.bind(this, Easing.bounce)} />
          <Button easing='Cubic' onPress={this.animate.bind(this, Easing.cubic)} />
          <Button easing='Back' onPress={this.animate.bind(this, Easing.back(2))} />
          <Button easing='Elastic' onPress={this.animate.bind(this, Easing.elastic(2))} />
          <Button easing='Ease' onPress={this.animate.bind(this, Easing.ease)} />
          <Button easing='InOut' onPress={this.animate.bind(this, Easing.inOut(Easing.quad))} />
          <Button easing='In' onPress={this.animate.bind(this, Easing.in(Easing.quad))} />
          <Button easing='Out' onPress={this.animate.bind(this, Easing.out(Easing.quad))} />
          <Button easing='Sin' onPress={this.animate.bind(this, Easing.sin)} />
          <Button easing='Linear' onPress={this.animate.bind(this, Easing.linear)} /> 
          <Button easing='Quad' onPress={this.animate.bind(this, Easing.quad)} />
        </ScrollView>
      </View>
   );
  }
}

const Button = ({onPress, easing}) => (
  <TouchableHighlight style={styles.button}  onPress={onPress}>
    <Text>{easing}</Text>
  </TouchableHighlight>
)

var styles = StyleSheet.create({
  container: { flex: 1 },
  button: {
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ededed',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  block: { width: 50, height: 50, backgroundColor: 'red' }
});
