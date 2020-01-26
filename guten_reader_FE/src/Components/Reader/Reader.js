import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { createAppContainer, withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from 'expo-font';
import MusicMenu from '../MusicMenu/MusicMenu';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { getToken, getRecommendation, postSongToPlayer, updateCurrentPage } from '../../apiCalls'

class Reader extends React.Component {
  static navigationOptions = {
    title: 'Book Title',
    headerRight: <Text>Page Number</Text>,
    headerRightContainerStyle: {
      paddingRight: 20
    }
  }

  constructor() {
    super();
    this.state = {
      currentPage: 0,
      currentToken: '',
      currentMood: 0,
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

  async updateCurrentPage() {
    const currentPage = await this.props.navigation.getParam('currentPage', 'ERROR')
    await this.setState({ currentPage: currentPage})
  };

  async onSwipeLeft() {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
    const currentText = await this.props.navigation.getParam('bookText', 'ERROR')
    const recommendation = await getRecommendation(this.state.currentToken, this.state.currentMood, currentText[this.state.currentPage])
    if (recommendation.mood !== undefined) {
      this.setState({ currentMood: recommendation.mood })
    } else {
      this.setState({ currentMood: this.state.currentMood })
    }
    await postSongToPlayer(recommendation.recommended_tracks, this.state.currentToken)
    const bookId = await this.props.navigation.getParam('bookId', 'ERROR')
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
      <Text style={styles.pageNum}>{this.state.currentPage}</Text>
        <GestureRecognizer onSwipeLeft={this.onSwipeLeft.bind(this)} onSwipeRight={this.onSwipeRight.bind(this)}>
          <ScrollView style={{backgroundColor: (this.state.isOnDarkMode === true ? 'black' : 'white'), height: '100%'}}>
            <View style={styles.fontButtons}>
                <Button style={styles.decFont} onPress={ this.decreaseFontSize.bind(this)} title="-" titleStyle={{fontSize: 16}} />
                <Button style={styles.incFont} onPress={ this.increaseFontSize.bind(this) } title="+" titleStyle={{fontSize: 32}}/>
                <Button onPress={ this.toggleDyslexicFont.bind(this) } title="Dyslexic Font" />
                <Button onPress={ this.toggleDarkMode.bind(this) } title={this.state.isOnDarkMode === true ? 'Dark Mode' : 'Light Mode'} />
              </View>
              <Text style={{
                padding: 20,
                fontSize: (this.state.defaultFontSize),
                fontFamily: (this.state.defaultFontFamily === true ? 'Roboto' : 'OpenDyslexic2'),
                color: (this.state.isOnDarkMode === true ? 'white' : 'black')
                }}>
                {bookText[this.state.currentPage]}}
              </Text>
          </ScrollView>
        </GestureRecognizer>
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
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: 'space-between'
  },
  pageNum: {
    paddingLeft: 20,
    alignItems: 'flex-end'
  }
});

export default withNavigation(Reader);
