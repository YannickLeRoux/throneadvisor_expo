import React, { Component } from 'react'
import { View } from 'react-native';
import {Button, Text } from 'native-base';

export default class MapScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Find a Throne',
      headerRight: <Button onPress={() => navigation.navigate('rating')}><Text>Rate it!</Text></Button>
    };
  }
  render() {
    return (
      <View>
        <Text> Main </Text>
        <Text> Main </Text>
        <Text> Main </Text>
      </View>
    )
  }
}