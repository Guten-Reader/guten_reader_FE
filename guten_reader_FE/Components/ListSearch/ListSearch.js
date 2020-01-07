import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const ListSearch = ({ book }) => {

  const addBookToLibrary = async () => {
    let newBook = {
      guten_id: book.id,
      title: book.title,
      author: book.author
    };
    let options = {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    console.log("options:: ", options)

    let response = await fetch(`https://guten-server.herokuapp.com/api/v1/users/4/books`, options);
    const data = await response.json();
    console.log("response data ::", data)
  }

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </View>
      <Button title="DOWNLOAD" onPress={addBookToLibrary} style={styles.button}/>
    </View>
  )
}

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
