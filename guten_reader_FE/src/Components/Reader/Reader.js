import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button, StatusBar } from 'react-native';
import { createAppContainer, withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from 'expo-font';
import MusicMenu from '../MusicMenu/MusicMenu';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { getToken, getRecommendation, postSongToPlayer, updateCurrentPage } from '../../apiCalls'

class Reader extends React.Component {
  static navigationOptions = {
    title: 'Reader',
    headerTintColor: '#53E69B',
    headerTitleStyle: {
        color: 'black',
      }
    }

  constructor() {g
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
    const bookTitle = this.props.navigation.getParam('title', 'ERROR')
    const currentText = this.props.navigation.getParam('bookText', 'ERROR')
    return (
      <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
        <View style={{backgroundColor: (this.state.isOnDarkMode === true ? 'black' : 'white'), flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10}}>
          <Text style={styles.bookTitle}>{bookTitle}</Text>
          <Text style={styles.pageNum}>{this.state.currentPage} / {currentText.length}</Text>
        </View>
        <ScrollView style={{backgroundColor: (this.state.isOnDarkMode === true ? 'black' : 'white'), height: '80%'}}>
          <GestureRecognizer onSwipeLeft={this.onSwipeLeft.bind(this)} onSwipeRight={this.onSwipeRight.bind(this)}>
            <Text style={{
              padding: 20,
              fontSize: (this.state.defaultFontSize),
              fontFamily: (this.state.defaultFontFamily === true ? 'Roboto' : 'OpenDyslexic2'),
              color: (this.state.isOnDarkMode === true ? 'white' : 'black'),
              }}>
              {bookText[this.state.currentPage]}}
            </Text>
          </GestureRecognizer>
        </ScrollView>
        <View style={{backgroundColor: (this.state.isOnDarkMode === true ? 'black' : 'white'), flex: 1, flexDirection: 'row', paddingRight: 20, paddingLeft: 20, justifyContent: 'space-between'}}>
          <Button style={styles.decFont} color="#53E69B" onPress={ this.decreaseFontSize.bind(this)} title="-" titleStyle={{fontSize: 16}} />
          <Button style={styles.incFont} color="#53E69B" onPress={ this.increaseFontSize.bind(this) } title="+" titleStyle={{fontSize: 32}}/>
          <Button color="#53E69B" onPress={ this.toggleDyslexicFont.bind(this) } title={this.state.defaultFontFamily === true ? 'Dyslexic Font' : 'Standard Font'} />
          <Button color="#53E69B" onPress={ this.toggleDarkMode.bind(this) } title={this.state.isOnDarkMode === true ? 'Light Mode' : 'Dark Mode'} />
        </View>
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
  pageNum: {
    color: '#999999',
    fontWeight: 'bold',
  },
  bookTitle: {
    color: '#999999',
    fontWeight: 'bold',
    width: '75%'
  },
  bookInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  title: {
    color: "black"
  }
});

export default withNavigation(Reader);
