import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import '../../assets/volume-on.png'

export default class MusicMenu extends Component {
  state = {isMuted: false}

  render() {
    return(
      <View>
        {this.state.isMuted && <Image source={require('../../assets/volume-on.png')} />}
        {!this.state.isMuted && <Image source={require('../../assets/mute.png')} />}
      </View>
    )
  }
}