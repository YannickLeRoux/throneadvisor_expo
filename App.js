import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import WelcomeScreen from './src/screens/WelcomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import UserDetailsScreen from './src/screens/UserDetailsScreen';
import MapScreen from './src/screens/MapScreen';
import SavedThronesScreen from './src/screens/SavedThronesScreen';
import ThroneDetailsScreen from './src/screens/ThroneDetailsScreen';





class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen},
      main: {
        screen: createBottomTabNavigator({
          map: { screen:
            createStackNavigator({
              mainMap: { screen: MapScreen },
              details: { screen: ThroneDetailsScreen }
            })
          },
          user: { screen: UserDetailsScreen },
          fav: { screen: SavedThronesScreen }
        })
      }
    });

    return (
     <Container>
       <MainNavigator />
     </Container>
    );
  }
}

export default App;
