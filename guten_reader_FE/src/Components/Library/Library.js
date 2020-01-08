import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from 'expo-font';
import ListLibrary from '../ListLibrary/ListLibrary';
import MenuLibrary from '../MenuLibrary/MenuLibrary';
import {getBooks, getBookText} from '../../apiCalls';
import { withNavigation } from 'react-navigation';

class Library extends React.Component {

  constructor(props) {
    super(props);
    this.downloadBook = this.downloadBook.bind(this)
    this.state = {
      books: [],
      error: ''
    }
  }

  async componentDidMount() {
    Font.loadAsync({
      'Roboto': require('../../../assets/fonts/Roboto.ttf'),
    });
    this.addBookMsg();

    const books = await getBooks(1);
    this.setState({
      books: books.books
    });
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

  async downloadBook(userId, bookId) {
    const bookText = await getBookText(userId, bookId)
    console.log('book text', bookText.data.book)
    
    const foundBook = this.state.books.find(book => book.id === bookId)
    this.props.navigation.navigate('Reader', {bookText: bookText.data.book, bookId: bookId, currentPage: foundBook.current_page})
    
  }

  render() {
    return (
      <View style={styles.library}>
        <Text style={styles.title}>Guten Reader</Text>
        <ListLibrary books={this.state.books} downloadBook={this.downloadBook} />
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
   fontWeight: 'bold',
   margin: 15,
   marginTop: 30
  }
})

export default withNavigation(Library);
