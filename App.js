import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Container } from 'native-base';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

import store from './src/store';
import WelcomeScreen from './src/screens/WelcomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import UserDetailsScreen from './src/screens/UserDetailsScreen';
import MapScreen from './src/screens/MapScreen';
import SavedThronesScreen from './src/screens/SavedThronesScreen';
import ThroneDetailsScreen from './src/screens/ThroneDetailsScreen';

class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID
      }
    );
    // create a new bathroom
    // firebase.database().ref().child('thrones').push().set({
    //   name: 'Starbucks',
    //   description: 'public bathroom',
    //   latitude: 37,
    //   longitude: -122
    // })
    // .then( () => console.log('inserted!'))
    // .catch( error => console.error(error));

  }

  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
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
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true
    });

    return (
      <Provider store={store}>
        <Container>
          <MainNavigator />
        </Container>
      </Provider>
    );
  }
}

export default App;
