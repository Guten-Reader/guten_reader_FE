import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {mockText} from './mock-data'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mockText}>{mockText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10%',
    marginRight: '10%',
  },

  mockText: {
    fontSize: 20
  }
});
