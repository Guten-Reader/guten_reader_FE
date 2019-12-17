import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import mockText from '../../mock-data'

class Reader extends React.Component {
  render() {
    return (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.mockText}>{mockText}</Text>
          </View>
        </ScrollView>
      
    );
  }
}

const AppNavigator = createStackNavigator({
  Reader: {
    screen: Reader,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10%',
    marginRight: '10%',
    flex: 1,
  },

  mockText: {
    fontSize: 20,
    marginTop: 40
  }
});

export default createAppContainer(AppNavigator);

