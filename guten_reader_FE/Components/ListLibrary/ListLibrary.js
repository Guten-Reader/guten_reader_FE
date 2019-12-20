import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Library(props) {
  console.log('props', props)

  function displayBooks() {
    return props.books.map((book) => {
      return (
        <View style={styles.list}>
          <Text style={styles.listItem}>{book}</Text>
          <Button style={styles.button} onPress={props.downloadBook} title="READ" onPress={props.downloadBook}></Button>
        </View>
      )
    })
  }

    return (
      <View>
        {displayBooks()}
      </View>
    )
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  listItem: {
   fontSize: 20
   },
   button: {
    fontSize: 20,
    color: '#53E69B'
   }
})
