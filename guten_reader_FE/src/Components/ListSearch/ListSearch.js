import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const ListSearch = ({ book }) => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </View>
      <Button title="CHECKOUT" style={styles.button}/>
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
