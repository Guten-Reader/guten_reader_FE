import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Toolbar } from 'react-native-material-ui';
import * as Font from 'expo-font';
import ListLibrary from '../ListLibrary/ListLibrary';
import MenuLibrary from '../MenuLibrary/MenuLibrary';

class Library extends React.Component {
  constructor() {
    super();
    this.state = {
      books: ["book1", "book2", "book3"],
      error: ''
    }
  }

  componentDidMount() {
    Font.loadAsync({
      'Roboto': require('../../assets/fonts/Roboto.ttf'),
    });
    this.addBookMsg();
  }

  addBook(book) {
    this.setState({
      books: [...this.state.books, book]
    })
  }

  addBookMsg(){
    if(!this.state.books.length) {
      this.setState({
        error: 'You have no books to read, please search and download a book for your reading pleasure!'
      })
    }
  }

  render() {
    return (
      <View>
        <Text>Guten Reader</Text>
        <ListLibrary books={this.state.books}/>
        <Text>{this.state.error}</Text>
        <MenuLibrary />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Library: {
    screen: Library,
  },
});

const styles = StyleSheet.create({
  toolbar: {
   width: '100%',
   height: 110
  }
})

export default createAppContainer(AppNavigator);
