import React, { Component } from 'react'
import { View, Platform } from 'react-native';
import {Button, Text } from 'native-base';

export default class MapScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Find a Throne',
      headerRight: (
      <Button
      onPress={() => navigation.navigate('rating')}
      transparent
      ><Text>
        Rate it!
        </Text>
      </Button>
      ),
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
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