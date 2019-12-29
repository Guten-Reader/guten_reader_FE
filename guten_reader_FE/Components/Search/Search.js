import React, { Component } from 'react';
import { StyleSheet, View, Button, ScrollView, Text, TextInput } from 'react-native';
import ListSearch from '../ListSearch/ListSearch'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      foundBooks: [],
      searchResult: false,
    }
  }

  updateState = (enteredText) => {
    this.setState({ searchQuery: enteredText})
  }

  searchBtn = async () => {
    if (this.state.searchQuery) {
      const response = await fetch(`http://gutendex.com/books?search=${this.state.searchQuery}`)
      try {
        const data = await response.json();
        this.filterContent(data.results);
        this.setState({ searchResult: true })
      }
      catch {
        this.setState({ foundBooks: [] })
      }
    } else {
      this.setState({ searchResult: false })
    }
  }

  filterContent = (data) => {
    if (data.length === 0) {
      console.log("Data length is 0");
      this.setState({ searchResult: false })
      this.setState({ foundBooks: [] })
      return;
    }
    let filterByMediaTypes = data.filter(book => book.media_type === 'Text')
    let cleanedBooks = filterByMediaTypes.map(book => {
      return {
        id: book.id,
        title: book.title,
        author: book.authors[0].name
      }
    });
    this.setState({ foundBooks: cleanedBooks })
  }

  render() {
    let renderSearchResults = [];
    let searchResult = 'No results from search, try again'
    if (this.state.foundBooks.length > 0) {
      renderSearchResults = this.state.foundBooks.map(book => {
        return <ListSearch book={book}/>
      })
    }
    return (
      <View style={styles.container}>
        <Text>Search by Title or Author:</Text>
        <TextInput
          placeholder="Title or Author"
          style={styles.input}
          onChangeText={this.updateState}
          value={this.state.searchQuery}
        />
        <Button title="SEARCH" onPress={this.searchBtn}/>
        {this.state.searchResult ? null : <Text>{searchResult}</Text>}
        <ScrollView>
          {renderSearchResults}
        </ScrollView>
        <Button style={styles.button} onPress={() => this.props.navigation.navigate('Library')} title="BACK"></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderColor: 'black',
  }
})

export default Search;
