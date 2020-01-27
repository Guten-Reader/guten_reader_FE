import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { addBook } from '../../apiCalls';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class ListSearch extends Component {
  constructor() {
    super();
    this.state = {
      checkout: false,
    }
  }

  addBookToLibrary = async () => {
    let newBook = {
      guten_id: this.props.book.id,
      title: this.props.book.title,
      author: this.props.book.author
    };
    addBook(1, newBook);
    await this.setState({checkout : true})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.title}>{this.props.book.title}</Text>
          <Text style={styles.author}>{this.props.book.author}</Text>
        </View>
        <Icon style={styles.download} name={this.state.checkout ? "check" : "arrow-down-circle"} color="#53E69B" onPress={this.addBookToLibrary} />
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
  },
  download: {
    fontSize: 25,
    paddingTop: 10
  }
});

export default ListSearch;
