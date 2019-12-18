import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function MenuLibrary(props) {
    return (
      <View style={styles.menu}>
        <Button title="SEARCH" onPress={() => this.props.navigation.navigate('Search')}></Button>
      </View>
    )
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#000000',
    width: '100%',
    height: 75,
    justifyContent: 'center',
  }
})
