import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';

function MenuLibrary(props) {

  const handlePress = () => {
    props.navigation.navigate('Search')
  }

    return (
      <View style={styles.toolbar}>
        <Button style={styles.button} onPress={handlePress} title="SEARCH"></Button>
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

export default withNavigation(MenuLibrary);
