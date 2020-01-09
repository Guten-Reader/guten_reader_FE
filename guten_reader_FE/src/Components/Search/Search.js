import React, { Component } from 'react';
import { StyleSheet, View, Button, ScrollView, Text, TextInput } from 'react-native';
import ListSearch from '../ListSearch/ListSearch'

class Search extends Component {
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
        <Text style={styles.title}>Search by Title or Author:</Text>
        <TextInput
          placeholder="Title or Author"
          style={styles.input}
          onChangeText={this.updateState}
          value={this.state.searchQuery}
        />
        <Button title="SEARCH" onPress={this.searchBtn}/>
        {this.state.searchResult ? null : <Text style={styles.title}>{searchError}</Text>}
        <ScrollView style={styles.scrollview}>
          {renderSearchResults}
        </ScrollView>
        <View style={styles.toolbar}>
          <Button style={styles.button} onPress={() => this.props.navigation.navigate('Library')} title="BACK"></Button>
        </View>
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
  input: {
    color: 'black',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    marginLeft: 20,
    marginRight: 20
  },
  title: {
   color: 'white',
   fontSize: 15,
   fontWeight: 'bold',
   marginTop: 40,
   marginRight: 20,
   marginLeft: 20,
   marginBottom: 10,
 },
 scrollview: {
   color: 'white',
   margin: 20
 },
 toolbar: {
   position: 'absolute',
   bottom: 0,
   right: 0,
   left: 0,
   backgroundColor: '#53E69B',
   justifyContent: 'center',
   height: 65,
   width: '100%',
   alignItems: 'center'
 }
})

export default Search;
