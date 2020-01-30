import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Reader from './src/Components/Reader/Reader.js';
import Library from './src/Components/Library/Library.js';
import Search from './src/Components/Search/Search.js';
import Settings from './src/Components/Settings/Settings'
import 'react-native-gesture-handler';


const MainNavigator = createStackNavigator({

  Library: {
    screen: Library,
    navigationOptions: {
      header: null,
    }
  },
  Reader: {
    screen: Reader,
  },
  Search: {
    screen: Search,
  },
  Settings: {
    screen: Settings,
  }
});

const App = createAppContainer(MainNavigator);

export default App;
