import * as React from 'react';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import ListLibrary from '../ListLibrary/ListLibrary';
import MenuLibrary from '../MenuLibrary/MenuLibrary';
import {getBooks, getBookText, deleteBook} from '../../apiCalls';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';

class Library extends React.Component {

  constructor(props) {
    super(props);
    this.downloadBook = this.downloadBook.bind(this)
    this.handlePress = this.handlePress.bind(this)
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
    const foundBook = this.state.books.find(book => book.id === bookId)
    this.props.navigation.navigate('Reader', {bookText: bookText.data.book, bookId: bookId, currentPage: foundBook.current_page})
  }

  handleDelete(userId, bookId) {
    deleteBook(userId, bookId)
  }

  handlePress() {
    this.props.navigation.navigate('Search')
  }

  render() {
    this.refreshLibrary();
    return (
      <View style={styles.library}>
        <Text style={styles.title}>Guten Reader</Text>
        <Button style={styles.button} onPress={this.handlePress} title="SEARCH"></Button>
        <Text style={{ marginLeft: 20, fontSize: 20}}>My Bookshelf</Text>
        <ScrollView>
          <ListLibrary books={this.state.books} downloadBook={this.downloadBook} handleDelete={this.handleDelete}/>
        </ScrollView>
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
 },
 button: {
   fontSize: 20
 }
})

export default withNavigation(Library);
