import React, { Component } from 'react'
import { View, Platform, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { MapView, Marker } from 'expo';
import {Button, Text, Icon } from 'native-base';

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
    markers: [],
    mapLoaded: false,
    region: {
      latitude: 37,
      longitude: -122,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true });
    // fetch throne list
    this.props.fetchThrones();
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
          onRegionChangeCompete={this.onRegionChangeComplete}
          region={this.state.region}
          style={{ flex: 1}}
          >

        {this.props.thrones.length && this.props.thrones.map( marker => (
          <MapView.Marker
              title={marker.name}
              description={marker.description}
              coordinate= {{ latitude: marker.latitude, longitude: marker.longitude }}
          />
          )
          )}
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

const mapStateToProps = ({ thrones }) => {
  return { thrones };

};
export default connect(mapStateToProps, {fetchThrones})(MapScreen);