import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Toolbar } from 'react-native-material-ui';
import * as Font from 'expo-font';
import ListLibrary from '../ListLibrary/ListLibrary';

class Library extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'Roboto': require('../../assets/fonts/Roboto.ttf'),
    });
  }
  render() {
    return (
      <View>
        <Text>Guten Reader</Text>
        <ListLibrary />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Library: {
    screen: Library,
  },
});

const styles = StyleSheet.create({
  toolbar: {
   width: '100%',
   height: 110
  }
})

export default createAppContainer(AppNavigator);
