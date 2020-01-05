import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MusicMenu from '../MusicMenu/MusicMenu';
import { withNavigation } from 'react-navigation';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class Reader extends React.Component {

  constructor() {
    super();
    this.state = {
      currentPage: 0
    }
  }

  onSwipeLeft(gestureState) {
    this.setState(prevState => {
       return {currentPage: prevState.currentPage + 1}
    });
  }

  onSwipeRight(gestureState) {
    this.setState({
      currentPage: this.state.currentPage - 1
    });
  }

  render() {
    const bookText = this.props.navigation.getParam('bookText', 'ERROR')
    return (
      <GestureRecognizer onSwipeLeft={this.onSwipeLeft.bind(this)} onSwipeRight={this.onSwipeRight.bind(this)}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.mockText}>{bookText[this.state.currentPage]}</Text>
            <Button style={styles.button} onPress={() => this.props.navigation.navigate('Library')} title="BACK"></Button>
            <MusicMenu />
          </View>
        </ScrollView>
      </GestureRecognizer>
    );
  }
}

const AppNavigator = createStackNavigator({
  Reader: {
    screen: Reader
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
  },
  button: {
   fontSize: 20,
   color: '#53E69B'
 }
});

// export default createAppContainer(AppNavigator);
export default withNavigation(Reader);
