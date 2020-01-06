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
        <Text style={styles.title}>Search by Title or Author:</Text>
        <TextInput
          placeholder="Title or Author"
          style={styles.input}
          onChangeText={this.updateState}
          value={this.state.searchQuery}
        />
        <Button title="SEARCH" onPress={this.searchBtn}/>
        {this.state.searchResult ? null : <Text style={styles.title}>{searchResult}</Text>}
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
    flex: 1,
    flexDirection: 'column'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    marginLeft: 20,
    marginRight: 20
  },
  title: {
   fontSize: 15,
   fontWeight: 'bold',
   marginTop: 20,
   marginRight: 20,
   marginLeft: 20,
   marginBottom: 10,
 },
 scrollview: {
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
