import React from 'react';
import { View, Text } from 'react-native';

export default function Library(props) {

  function displayBooks() {
    return props.books.map((book) => {
      return <Text>{book}</Text>
    })
  }

    return (
      <View>
        {displayBooks()}
      </View>
    )

}
