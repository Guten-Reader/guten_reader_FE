import React from 'react';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../HomeScreen/HomeScreen';
import Reader from '../Reader/Reader';
import Library from '../Library/Library';

const AppContainer = createAppContainer({
  Home: HomeScreen,
  Reader: Reader,
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
