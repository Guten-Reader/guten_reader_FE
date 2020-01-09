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
        <TouchableOpacity onPress={this.toggleSound}>
          {this.state.isMuted === true && <Image style={styles.volume} source={require('../../../assets/volume-on.png')} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toggleSound}>
          {!this.state.isMuted && <Image style={styles.mute} source={require('../../../assets/mute.png')} />}
        </TouchableOpacity>
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
  },
  volume: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginLeft: 100
  },
  mute: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginLeft: 100
  }

});

export default withNavigation(MusicMenu);
