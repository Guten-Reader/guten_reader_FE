import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { createAppContainer, withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from 'expo-font';
import MusicMenu from '../MusicMenu/MusicMenu';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { getToken, getRecommendation, postSongToPlayer, updateCurrentPage } from '../../apiCalls'

class Reader extends React.Component {

  constructor() {
    super();
    this.state = {
      currentPage: 0,
      currentToken: '',
      currentMood: 'blank',
      defaultFontSize : 20,
      defaultFontFamily: true,
      isOnDarkMode: false
    };
  };

  async componentDidMount() {
    this.updateCurrentPage()
    const token = await getToken()
    this.setState({ currentToken: token.access_token })
  };

  increaseFontSize() {
    let newFontSize = this.state.defaultFontSize += 2
    this.setState({
      defaultFontSize : newFontSize
    });
 };

 decreaseFontSize() {
   let newFontSize = this.state.defaultFontSize -=2
   this.setState({
     defaultFontSize: newFontSize
   });
 };

  toggleDyslexicFont() {
   if(this.state.defaultFontFamily === true) {
    this.setState({
      defaultFontFamily: false
    });
   } else {
     this.setState({
       defaultFontFamily: true
     });
   };
 };

 toggleDarkMode() {
  if(this.state.isOnDarkMode === false) {
    this.setState({
      isOnDarkMode: true
    });
   } else {
     this.setState({
       isOnDarkMode: false
     });
   };
 };

  updateCurrentPage() {
    const currentPage = this.props.navigation.getParam('currentPage', 'ERROR')
    this.setState({ currentPage: currentPage})
  };

  async onSwipeLeft() {
    this.setState(prevState => {
       return {currentPage: prevState.currentPage + 1}
    });
    const currentText = this.props.navigation.getParam('bookText', 'ERROR')
    const recommendation = await getRecommendation(this.state.currentToken, this.state.currentMood, currentText) 
    this.setState({ currentMood: recommendation.mood })
    await postSongToPlayer(recommendation.recommended_tracks, this.state.currentToken)
    const bookId = this.props.navigation.getParam('bookId', 'ERROR')
    await updateCurrentPage(bookId, this.state.currentPage)
  };

  async onSwipeRight() {
    this.setState({
      currentPage: this.state.currentPage - 1
    });
    const bookId = this.props.navigation.getParam('bookId', 'ERROR')
    await updateCurrentPage(bookId, this.state.currentPage)
  };

  render() {
    const bookText = this.props.navigation.getParam('bookText', 'ERROR')
    return (
      <View style={styles.container}>
        <GestureRecognizer onSwipeLeft={this.onSwipeLeft.bind(this)} onSwipeRight={this.onSwipeRight.bind(this)}>
          <ScrollView style={{backgroundColor: (this.state.isOnDarkMode === true ? 'black' : 'white')}}>
              <Button onPress={ this.increaseFontSize.bind(this) } title="Click here to increase font size" />
              <Button onPress={ this.decreaseFontSize.bind(this) } title="Click here to decrease font size" />
              <Button onPress={ this.toggleDyslexicFont.bind(this) } title="Click here for dyslexic font" />
              <Button onPress={ this.toggleDarkMode.bind(this) } title="Click here for dark mode" />
              <Text style={{ 
                marginTop: 20,
                padding: 20,
                fontSize: (this.state.defaultFontSize),
                fontFamily: (this.state.defaultFontFamily === true ? 'Roboto' : 'OpenDyslexic2'),
                color: (this.state.isOnDarkMode === true ? 'white' : 'black')
                }}>
                {bookText[this.state.currentPage]}}
              </Text>

          </ScrollView>
        </GestureRecognizer>
        <MusicMenu />
      </View>
    )}
   }


const AppNavigator = createStackNavigator({
  Reader: {
    screen: Reader
  },
});

const styles = StyleSheet.create({
  container: {
    fontFamily: 'OpenDyslexic2',
    flex: 1,
    flexDirection: 'column'
  }
});

export default withNavigation(Reader);
