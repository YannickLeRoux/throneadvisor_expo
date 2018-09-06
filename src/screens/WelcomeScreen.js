import React, { Component } from 'react';
import _ from 'lodash';
import { AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to ThroneAdvisor', color: '#03A9F4'},
  { text: 'Helps you find public bathrooms', color: '#009688'},
  { text: 'Help the community with ratings', color: '#03A9F4'},
];

export default class WelcomeScreen extends Component {
  state = { token: null };

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');


    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token })
    } else {
      this.setState({ token: false })
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');

  }

  render() {

    if (_.isNull(this.state.token)) {
      return <AppLoading />
    }

    return (
    <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
    )
  }
}