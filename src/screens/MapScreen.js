import React, { Component } from 'react'
import { View, Platform, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
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

  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true })
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }

  render() {
    if (!this.state.mapLoaded){
      return (
        <View style={{ flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={{ flex: 1}}>
        <MapView
          onRegionChangeComplete={this.onRegionChangeComplete}
          region={this.state.region}
          style={{ flex: 1}}
        />
      </View>
    )
  }
}