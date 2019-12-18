import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Library(props) {

  function displayBooks() {
    return props.books.map((book) => {
      return (
        <View>
          <Text>{book}</Text>
          <Button title="READ"></Button>
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
