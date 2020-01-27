import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

function ListLibrary(props) {

  const handlePress = id => {
    props.downloadBook(1, id)
  }

  function displayBooks() {
    return props.books.map((book) => {
      return (
        <View key={book.id} style={styles.listCont}>
          <View style={styles.list}>
            <Icon style={styles.close} name="close" color="#53E69B" onPress={() => props.handleDelete(1, book.id)} />
            <View>
              <Text style={styles.listItem, styles.title}>{book.title}</Text>
              <Text style={styles.listItem, styles.author}>{book.author}</Text>
            </View>
            <Icon style={styles.bookOpen} name="book-open" color="#53E69B" onPress={() => handlePress(book.id)} />
          </View>
          <View style={{ borderBottomColor: '#cbf7e1', borderBottomWidth: 1, margin: 20}} />
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
   title: {
     fontWeight: 'bold',
     fontSize: 20,

     width: 200
   },
   author: {
     fontSize: 15
   },
   close: {
     fontSize: 20,
     paddingTop: 7
   },
   bookOpen: {
     fontSize: 25,
     paddingTop: 10
   }
})

export default withNavigation(ListLibrary);
