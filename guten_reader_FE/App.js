import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {mockText} from './mock-data'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Reader from './Components/Reader/Reader.js';
import HomeScreen from './Components/HomeScreen/HomeScreen.js'
import 'react-native-gesture-handler'

const MainNavigator = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  Reader: { screen: Reader }
});

const App = createAppContainer(MainNavigator);

export default App;








