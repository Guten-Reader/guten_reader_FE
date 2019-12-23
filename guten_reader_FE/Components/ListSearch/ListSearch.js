import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const ListSearch = ({ book }) => {
  return (
    <View style={styles.container}>
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
      <Button title="DOWNLOAD" style={styles.button}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  text: {
  },
  button: {
  }
});

export default ListSearch;