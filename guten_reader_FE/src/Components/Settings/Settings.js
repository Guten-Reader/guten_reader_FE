import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, StatusBar } from 'react-native';

class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
    headerTintColor: '#53E69B',
    headerTitleStyle: {
      color: '#000000',
    }
  }

  constructor() {
    super();
    this.state = {
      musicGenre: 'classical',
      font: 'roboto',
      fontSize: '20',
      darkMode: 'false'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>Settings Component</Text>
        <Text style={styles.text}>Genre: {this.state.musicGenre}</Text>
        <Text style={styles.text}>font: {this.state.font}</Text>
        <Text style={styles.text}>fontSize: {this.state.fontSize}</Text>
        <Text style={styles.text}>darkMode: {this.state.darkMode}</Text>

        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={this.state.musicGenre}
            onValueChange={(itemValue) =>
              this.setState({ musicGenre: itemValue})
          }>
          <Picker.Item label="Classical" value="classical" />
          <Picker.Item label="Metal" value="metal" />
          <Picker.Item label="Techno" value="techno" />
          </Picker>

          <Picker
            style={styles.picker}
            selectedValue={this.state.font}
            onValueChange={(itemValue) =>
              this.setState({ font: itemValue})
          }>
          <Picker.Item label="Roboto" value="roboto" />
          <Picker.Item label="Dyslexic" value="dyslexic" />
          </Picker>

          <Picker
            style={styles.picker}
            selectedValue={this.state.fontSize}
            onValueChange={(itemValue) =>
              this.setState({ fontSize: itemValue})
          }>
          <Picker.Item label="Size 12" value="12" />
          <Picker.Item label="Size 20" value="20" />
          <Picker.Item label="Size 36" value="36" />
          </Picker>

          <Picker
            style={styles.picker}
            selectedValue={this.state.darkMode}
            onValueChange={(itemValue) =>
              this.setState({ darkMode: itemValue})
          }>
          <Picker.Item label="Light Mode" value="false" />
          <Picker.Item label="Dark Mode" value="true" />
          </Picker>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  pickerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  text: {
  },
  picker: {
    height: 220,
    width: 100,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default Settings;
