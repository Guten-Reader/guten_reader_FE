import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Search from '../Search/Search';
import Reader from '../Reader/Reader';
import Library from '../Library/Library';


const AppContainer = createAppContainer({
  Reader: Reader,
  Search: Search,
  Library: Library,
},
{
  initialRouteName: 'Library',
}
);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
