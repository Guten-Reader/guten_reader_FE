import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

class ListSearch extends Component {
  constructor() {
    super();
  }

  addBookToLibrary = async () => {
    let newBook = {
      guten_id: this.props.book.id,
      title: this.props.book.title,
      author: this.props.book.author
    };
    let options = {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    await fetch(`https://guten-server.herokuapp.com/api/v1/users/1/books`, options);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.title}>{this.props.book.title}</Text>
          <Text style={styles.author}>{this.props.book.author}</Text>
        </View>
        <Button title="DOWNLOAD" onPress={this.addBookToLibrary} style={styles.button}/>
        <Button title="CHECKOUT" style={styles.button}/>

      <Button title="CHECKOUT" style={styles.button}/>
    </View>
  )
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between'
  }, 
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    width: 200
  },
  author: {
    color: 'white',
    fontSize: 15,
    marginBottom: 10,
    width: 200
  }
});

export default ListSearch;
