import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function MenuLibrary(props) {
    return (
      <View style={styles.toolbar}>
        <Button style={styles.button} title="SEARCH"></Button>
      </View>
    )
}

const styles = StyleSheet.create({
  toolbar: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#53E69B',
    justifyContent: 'center',
    height: 65,
    width: '100%',
    alignItems: 'center'
  },
  button: {
    fontSize: 20
  }
})
