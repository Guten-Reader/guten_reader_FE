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
    width: '100%',
    height: 110
  }
})
