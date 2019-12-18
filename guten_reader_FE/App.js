import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Text} from 'react-native'
import Reader from './Components/Reader/Reader.js';
import Search from './Components/Search/Search.js';
import HomeScreen from './Components/HomeScreen/HomeScreen.js'
import 'react-native-gesture-handler';
import * as Font from 'expo-font'
import * as React from 'react';
import { registerRootComponent } from 'expo';

class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'Roboto': require('./assets/fonts/Roboto.ttf'),
    });
   const MainNavigator = createStackNavigator({
      HomeScreen: {screen: HomeScreen},
      Reader: { screen: Reader },
      Search: { screen: Search }
    });
    createAppContainer(MainNavigator)
  }
  
  render() {
    return(
      <HomeScreen />
    )

  }
  
}

export default App;








