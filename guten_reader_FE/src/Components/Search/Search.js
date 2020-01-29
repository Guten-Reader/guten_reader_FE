import React, { Component } from 'react';
import { StyleSheet, View, Button, ScrollView, Text, TextInput, StatusBar } from 'react-native';
import ListSearch from '../ListSearch/ListSearch';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class Search extends Component {
  static navigationOptions = {
    title: 'Search',
    headerStyle: {
       backgroundColor: '#000000',
     },
    headerTintColor: '#53E69B',
    headerTitleStyle: {
      color: '#FFFFFF',
    }
  }

  constructor() {
    super();
    this.state = {
      searchQuery: '',
      foundBooks: [],
      searchResult: true,
    }
  }

  updateState = (enteredText) => {
    this.setState({ searchQuery: enteredText})
  }

  searchBtn = async () => {
    if (this.state.searchQuery) {
      const response = await fetch(`http://gutendex.com/books?search=${this.state.searchQuery}`)
      const data = await response.json();
      this.filterContent(data.results);
    }
  }

  filterContent = (data) => {
    if (data.length === 0) {
      this.setState({ searchResult: false })
      this.setState({ foundBooks: [] })
      return;
    }
    let filterByMediaType = data.filter(book => book.media_type === 'Text')
    let cleanedBooks = this.mapCleanBooks(filterByMediaType)
    this.setState({ searchResult: true })
    this.setState({ foundBooks: cleanedBooks })
  }

  mapCleanBooks = (books) => {
    return books.map(book => {
      let author = "unknown author"
      if (book.authors[0] !== undefined) {
        author = book.authors[0].name
      }
      return {
        id: book.id,
        title: book.title,
        author: author
      }
    });
  }

  render() {
    let renderSearchResults = [];
    let searchError = 'No results from search, try again';
    if (this.state.foundBooks.length > 0) {
      renderSearchResults = this.state.foundBooks.map((book, index) => {
        return <ListSearch book={book} key={index}/>
      })
    }

    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Search by Title or Author:</Text>
        <View style={styles.search}>
          <TextInput
            placeholder="Title or Author"
            style={styles.input}
            onChangeText={this.updateState}
            value={this.state.searchQuery}
          />
          <Icon style={styles.magnifier} name="magnifier" color="#53E69B" onPress={this.searchBtn} />
        </View>
        <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, }} />
        {this.state.searchResult ? null : <Text style={styles.title}>{searchError}</Text>}
        <ScrollView style={styles.scrollview}>
          {renderSearchResults}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column'
  },
  title: {
   color: 'white',
   fontSize: 20,
   fontWeight: 'bold',
   marginTop: 20,
   marginRight: 20,
   marginLeft: 20,
   marginBottom: 10,
 },
 scrollview: {
   color: 'white',
   margin: 20
 },
 input: {
   color: 'black',
   backgroundColor: 'white',
   borderColor: 'white',
   borderWidth: 1,
   marginTop: 10,
   marginBottom: 10,
   padding: 15,
   marginLeft: 20,
   width: '77%'
 },
 magnifier: {
   fontSize: 25,
   borderWidth: 1,
   borderColor: '#d6d7da',
   padding: 9.4,
 },
 search: {
   alignItems: 'center',
   flexDirection: 'row',
   marginBottom: 20
 }
})

export default Search;
