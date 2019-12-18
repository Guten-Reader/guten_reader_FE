import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { Toolbar } from 'react-native-material-ui';
import * as Font from 'expo-font';
// import SplashScreen from '../SplashScreen/SplashScreen'
// import SplashScreen from 'react-native-splash-screen';
// import {useEffect} from 'react';
import { SplashScreen } from 'expo'

class HomeScreen extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'Roboto': require('../../assets/fonts/Roboto.ttf'),
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={styles.toolbar}>
        <Toolbar
          leftElement="menu"
          centerElement="Search"
          searchable={{
          autoFocus: true,
          placeholder: 'Search',
        }}
        rightElement={{
            menu: {
                icon: "more-vert",
                labels: ["item 1", "item 2"]
            }
        }}
        onRightElementPress={ (label) => { console.log(label) }}
      />
      </View>
        <View style={{ flex: 1 }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Reader"
          onPress={() => this.props.navigation.navigate('Reader')}
          style={{ flex: 1 }}
        />
        </View>
     
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

const styles = StyleSheet.create({
  toolbar: {
   width: '100%',
   height: 110
  }
})

export default createAppContainer(AppNavigator);

