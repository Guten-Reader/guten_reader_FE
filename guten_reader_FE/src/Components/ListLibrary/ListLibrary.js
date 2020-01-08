import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';

function ListLibrary(props) {

  const handlePress = id => {
    props.downloadBook(1, id)
  }

  // needs to find book with this id and return currentText

  function displayBooks() {
    return props.books.map((book) => {
      return (
        <View key={book.id} style={styles.listCont}>
          <Text style={styles.line}>______________________________________________________</Text>
          <View style={styles.list}>
            <View>
              <Text style={styles.listItem, styles.title}>{book.title}</Text>
              <Text style={styles.listItem, styles.author}>{book.author}</Text>
            </View>
            <Button style={styles.button} onPress={() => handlePress(book.id)} title="READ"/>
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
   fontSize: 20,
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
     fontSize: 20,
     paddingTop: 10,
     paddingBottom: 10,
     width: 200
   },
   author: {
     fontSize: 15
   }
})

export default withNavigation(ListLibrary);
