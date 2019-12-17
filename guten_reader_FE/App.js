import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {mockText} from './mock-data'

export default function App() {
  return (
    // Might need to change ScrollView to FlatView which renders on page view, not all at once
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.mockText}>{mockText}</Text>
      </View>
    </ScrollView>
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
    flex: 1,
    borderColor: 'red',
    borderWidth: 1
  },

  mockText: {
    fontSize: 20,
    marginTop: 40
  }
});
