import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      userSettings: {
        musicGenre: 'clasical',
        font: 'default',
        fontSize: '20',
        darkMode: false
      }
    }
  }

  render() {
    return (
      <View>
        <Text>Settings Component</Text>
      </View>
    )
  }
}

export default Settings;