import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to ThroneAdvisor', color: '#03A9F4'},
  { text: 'Helps you find public bathrooms', color: '#009688'},
  { text: 'Help the community with ratings', color: '#03A9F4'},
];

export default class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');

  }

  render() {
    return (
    <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
    )
  }
}