import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Library(props) {
  console.log('props', props)

  function displayBooks() {
    return props.books.map((book) => {
      return (
        <View style={styles.listCont}>
          <Text style={styles.line}>______________________________________________________</Text>
          <View style={styles.list}>
            <View>
              <Text style={styles.listItem, styles.title}>{book.title}</Text>
              <Text style={styles.listItem, styles.author}>{book.author}</Text>
            </View>
            <Button style={styles.button} onPress={props.downloadBook} title="READ"></Button>
          </View>
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
  },
   listCont: {
     flexDirection: 'column',
   },
   line: {
     color: '#DDDDDD',
     paddingLeft: 20,
     marginBottom: -20,
   },
   title: {
     fontWeight: 'bold',
     fontSize: 20
   },
   author: {
     fontSize: 15
   }
})
