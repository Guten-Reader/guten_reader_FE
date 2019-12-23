import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import '../../assets/volume-on.png'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

export default class MusicMenu extends Component {
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

  // Function to successfully fetch song, return in URL

  render() {
    // const track = ^^^ song URL in this.state.currentSong or whatever
    // gets confusing:
    //    const video = this.state.isChanging ? null : (
      // <Video source={{uri: track.audioURL}}
      // paused={this.state.paused} pauses playback
      // maybe move sound/mute to two separate buttons, when one is pushed, isPaused is true, whatever
    // )
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
