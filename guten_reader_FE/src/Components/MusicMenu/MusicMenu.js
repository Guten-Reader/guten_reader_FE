import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, withNavigation } from 'react-navigation';

class MusicMenu extends Component {
  constructor() {
    super();

    this.state = {
      paused: true
    }
  }

  state = {isMuted: false}

  toggleSound = () => {
    this.state.isMuted ? this.setState({isMuted: false}) : this.setState({isMuted: true})
  }

  render() {
    return(
      <View style={styles.toolbar}>
        <Button style={styles.button} onPress={() => this.props.navigation.navigate('Library')} title="BACK"></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#53E69B',
    justifyContent: 'center',
    height: 65,
    width: '100%',
    alignItems: 'center'
  }

});

export default withNavigation(MusicMenu);
