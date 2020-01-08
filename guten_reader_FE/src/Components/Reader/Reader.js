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
      currentToken: '',
      currentMood: 'Neutral'
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
    const recommendation = await getRecommendation(this.state.currentToken, this.state.currentMood) 
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
