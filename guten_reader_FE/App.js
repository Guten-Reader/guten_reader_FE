import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Reader from './Components/Reader/Reader.js';
import HomeScreen from './Components/HomeScreen/HomeScreen.js';
import Library from './Components/Library/Library.js';
import 'react-native-gesture-handler';
import * as Font from 'expo-font';


const MainNavigator = createStackNavigator({
  Library: {
    screen: Library,
    navigationOptions: {
      header: null,
    }
  },
  Reader: {
    screen: Reader,
    navigationOptions: {
      header: null,
    }
  },
});

const App = createAppContainer(MainNavigator);

export default App;
