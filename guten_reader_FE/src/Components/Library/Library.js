import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from 'expo-font';
import ListLibrary from '../ListLibrary/ListLibrary';
import MenuLibrary from '../MenuLibrary/MenuLibrary';
import {getBooks, getBookText, deleteBook} from '../../apiCalls';
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
      'OpenDyslexic2': require('../../../assets/fonts/OpenDyslexic-Regular.otf')
    });
    this.addBookMsg();
    this.refreshLibrary();
  }

  async refreshLibrary() {
    const books = await getBooks(1);
    await this.setState({
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
<<<<<<< HEAD
=======
    
>>>>>>> development
    const foundBook = this.state.books.find(book => book.id === bookId)
    this.props.navigation.navigate('Reader', {bookText: bookText.data.book, bookId: bookId, currentPage: foundBook.current_page})
    
  }

  async handleDelete(userId, bookId) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    await fetch(`https://guten-server.herokuapp.com/api/v1/users/${userId}/books/${bookId}`, options);
  }

  render() {
    this.refreshLibrary();
    return (
      <View style={styles.library}>
        <Text style={styles.title}>Guten Reader</Text>
<<<<<<< HEAD
        <Text style={{ marginLeft: 20, fontSize: 20}}>My Bookshelf</Text>
        <ListLibrary books={this.state.books} downloadBook={this.downloadBook} />
=======
        <ListLibrary books={this.state.books} downloadBook={this.downloadBook} handleDelete={this.handleDelete}/>
>>>>>>> development
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
   marginLeft: 20,
   margin: 15,
   marginTop: 30
  }
})

export default withNavigation(Library);
