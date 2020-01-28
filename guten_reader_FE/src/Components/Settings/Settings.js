import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      userSettings: {
        musicGenre: 'classical',
        font: 'default',
        fontSize: '20',
        darkMode: 'false'
      }
    }
  }

  render() {
    return (
      <View>
        <Text>Settings Component</Text>
        <Text>Genre: {this.state.userSettings.musicGenre}</Text>
        <Text>font: {this.state.userSettings.font}</Text>
        <Text>fontSize: {this.state.userSettings.fontSize}</Text>
        <Text>darkMode: {this.state.userSettings.darkMode}</Text>
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
        }>
        <Picker.Item label="Classical" value="classical" />
        <Picker.Item label="Metal" value="metal" />
        <Picker.Item label="Techno" value="techno" />
        </Picker>
      </View>
    )
  }
}

export default Settings;