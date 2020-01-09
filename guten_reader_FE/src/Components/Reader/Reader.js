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
    }
  }

  componentDidMount() {
    Font.loadAsync({
      'OpenDyslexic2': require('../../../assets/fonts/OpenDyslexic-Regular.otf'),
    });
  }

  increaseFontSize() {
    let newFontSize = this.state.defaultFontSize += 2
    this.setState({
      defaultFontSize : newFontSize
    });
 }

 decreaseFontSize() {
   let newFontSize = this.state.defaultFontSize -=2
   this.setState({
     defaultFontSize: newFontSize
   })
 }

  toggleDyslexicFont() {
   if(this.state.defaultFontFamily === true) {
    this.setState({
      defaultFontFamily: false
    })
   } else {
     this.setState({
       defaultFontFamily: true
     })
   }
 }

 toggleDarkMode() {
  if(this.state.isOnDarkMode === false) {
    this.setState({
      isOnDarkMode: true
    })
   } else {
     this.setState({
       isOnDarkMode: false
     })
   }
 }

  async componentDidMount() {
    this.updateCurrentPage()
    const token = await getToken()
    this.setState({ currentToken: token.access_token })
  }

  updateCurrentPage() {
    const currentPage = this.props.navigation.getParam('currentPage', 'ERROR')
    this.setState({ currentPage: currentPage})
  }

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
  }

  async onSwipeRight() {
    this.setState({
      currentPage: this.state.currentPage - 1
    });
    const bookId = this.props.navigation.getParam('bookId', 'ERROR')
    await updateCurrentPage(bookId, this.state.currentPage)
  }

  render() {
    const bookText = this.props.navigation.getParam('bookText', 'ERROR')
    return (
      <View style={styles.container}>
        <GestureRecognizer onSwipeLeft={this.onSwipeLeft.bind(this)} onSwipeRight={this.onSwipeRight.bind(this)}>
          <ScrollView style={{backgroundColor: (this.state.isOnDarkMode === true ? 'black' : 'white')}}>
            <View style={styles.fontButtons}>
                <Button style={styles.decFont} onPress={ this.decreaseFontSize.bind(this)} title="-" titleStyle={{fontSize: 16}} />
                <Button style={styles.incFont} onPress={ this.increaseFontSize.bind(this) } title="+" titleStyle={{fontSize: 32}}/>
                <Button onPress={ this.toggleDyslexicFont.bind(this) } title="Dyslexic Mode" />
                <Button onPress={ this.toggleDarkMode.bind(this) } title={this.state.isOnDarkMode === true ? 'Dark Mode' : 'Light Mode'} />
              </View>
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
  },
  fontButtons: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: 'space-between'
  }
});

export default withNavigation(Reader);
