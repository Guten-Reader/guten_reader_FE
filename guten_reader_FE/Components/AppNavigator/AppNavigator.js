import React from 'react';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../HomeScreen/HomeScreen';
<<<<<<< HEAD
import Search from '../Search/Search'
import Reader from '../Reader/Reader'
=======
import Reader from '../Reader/Reader';
import Library from '../Library/Library';
>>>>>>> development

const AppContainer = createAppContainer({
  Reader: Reader,
<<<<<<< HEAD
  Search: Search,
=======
  Library: Library,
>>>>>>> development
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
