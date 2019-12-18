import React, { Component } from 'react';
import { StyleSheet, View, Button, ScrollView, Text } from 'react-native';
import ListSearch from '../ListSearch/ListSearch'

class Search extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Search Component</Text>
        <ListSearch />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
})

export default Search;