import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../HomeScreen/HomeScreen';
import Reader from '../Reader/Reader'

const AppContainer = createAppContainer(  {
  Home: HomeScreen,
  Reader: Reader,
},
{
  initialRouteName: 'Home',
}
);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}