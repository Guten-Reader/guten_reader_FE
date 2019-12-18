import React, {Component} from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import '../../assets/volume-on.png'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

export default class MusicMenu extends Component {
  
  state = {isMuted: false}

  toggleSound = () => {
    this.state.isMuted ? this.setState({isMuted: false}) : this.setState({isMuted: true})
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleSound}>
          {this.state.isMuted === true && <Image style={styles.volume} source={require('../../assets/volume-on.png')} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toggleSound}>
          {!this.state.isMuted && <Image style={styles.mute} source={require('../../assets/mute.png')} />}
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  volume: {
    height: 50,
    resizeMode: 'contain'
  },
  mute: {
    height: 50,
    resizeMode: 'contain'
  }

});
