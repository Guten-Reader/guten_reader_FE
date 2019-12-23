import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Reader from './Components/Reader/Reader.js';
import Search from './Components/Search/Search.js';
import HomeScreen from './Components/HomeScreen/HomeScreen.js'
import * as Font from 'expo-font'
import 'react-native-gesture-handler';

const MainNavigator = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  Reader: { screen: Reader },
  Search: { screen: Search }
});

const App = createAppContainer(MainNavigator);

export default App;








