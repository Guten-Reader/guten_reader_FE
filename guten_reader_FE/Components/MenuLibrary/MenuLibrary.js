import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

export default function MenuLibrary(props) {
    return (
      <View style={styles.toolbar}>
      <Toolbar
        searchable={{
        autoFocus: true,
        placeholder: 'Search',
      }}
    />
    </View>
    )
}

const styles = StyleSheet.create({
  toolbar: {
    alignItems: 'center',
    color:'#53E69B',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  }
})
