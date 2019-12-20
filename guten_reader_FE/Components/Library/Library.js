import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from 'expo-font';
import ListLibrary from '../ListLibrary/ListLibrary';
import MenuLibrary from '../MenuLibrary/MenuLibrary';

class Library extends React.Component {
  constructor() {
    super();
    this.state = {
      books: ["Book Title 1", "Book Title 2", "Book Title 3"],
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

  downloadBook() {
    console.log('download')
  }

  render() {
    return (
      <View style={styles.library}>
        <Text style={styles.title}>Guten Reader</Text>
        <ListLibrary books={this.state.books} downloadBook={this.downloadBook}/>
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
  library: {
    flex: 1,
    flexDirection: 'column'
  },
  title: {
   fontSize: 30,
   margin: 15,
   marginTop: 30
  }
})

export default createAppContainer(AppNavigator);
