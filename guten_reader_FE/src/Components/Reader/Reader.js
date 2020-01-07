import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { createAppContainer, withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MusicMenu from '../MusicMenu/MusicMenu';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { getToken, getRecommendation, postSongToPlayer, updateCurrentPage } from '../../apiCalls'

class Reader extends React.Component {

  constructor() {
    super();
    this.state = {
      currentPage: 0,
      // currentText: bookText[this.state.currentPage]
      currentToken: ''
    }
  }

  async componentDidMount() {
    const token = await getToken()
    this.setState({ currentToken: token.access_token })
  }

  async onSwipeLeft(gestureState) {
    this.setState(prevState => {
       return {currentPage: prevState.currentPage + 1}
    });
    const recommendation = await getRecommendation(this.state.currentToken)
    await postSongToPlayer(recommendation.track_uri, this.state.currentToken)
    const bookId = this.props.navigation.getParam('bookId', 'ERROR')
    const newCurrentPage = await updateCurrentPage(bookId, this.state.currentPage)
    console.log('new current page--->', newCurrentPage)
  }

  onSwipeRight(gestureState) {
    this.setState({
      currentPage: this.state.currentPage - 1
    });

  }



  render() {
    const bookText = this.props.navigation.getParam('bookText', 'ERROR')
    return (
      <View style={styles.container}>
        <GestureRecognizer onSwipeLeft={this.onSwipeLeft.bind(this)} onSwipeRight={this.onSwipeRight.bind(this)}>
          <ScrollView>
              <Text style={styles.mockText}>
                {bookText[this.state.currentPage]}
              </Text>
          </ScrollView>
        </GestureRecognizer>
        <MusicMenu />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Reader: {
    screen: Reader
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  mockText: {
    fontSize: 20,
    marginTop: 20,
    padding: 20
  }
});

export default withNavigation(Reader);
