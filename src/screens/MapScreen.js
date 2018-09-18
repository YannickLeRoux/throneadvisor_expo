import React, { Component } from 'react'
import { View, Platform, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { MapView, Marker } from 'expo';
import {Button, Text, Icon } from 'native-base';

import MarkersList from '../components/MarkersList';

import { fetchThrones } from '../actions';

class MapScreen extends Component {


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
      latitude: 37,
      longitude: -122,
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

  onButtonPress = () => {
    this.props.fetchThrones(this.state.region);
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
        >
        <MarkersList />
        </MapView>

        <View style={ styles.buttonContainer}>
          <Button
            large
            style={{backgroundColor:'#009688'}}
            onPress={this.onButtonPress}>
            <Icon name='search' />
            <Text>
              Search This Area
            </Text>
          </Button>
        </View>
      </View>
    )
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center'
  }
}
export default connect(null, {fetchThrones})(MapScreen);