import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Reader from './Components/Reader/Reader.js';
import HomeScreen from './Components/HomeScreen/HomeScreen.js';

export default class SplashScreen {
  constructor() {
    super()
  }

  render() {
    return(
      <h1>Splash</h1>
    )
  }
}