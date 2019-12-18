import React from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';

const ListSearch = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.text}>ListSearch Items</ScrollView>
      <Button title="DOWNLOAD" style={styles.button}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  text: {
    color: '#000'
  },
  button: {
    color: '#000'
  }
})

export default ListSearch;