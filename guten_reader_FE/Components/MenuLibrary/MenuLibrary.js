import React from 'react';
import { View, Button } from 'react-native';

export default function MenuLibrary(props) {

    return (
      <View>
        <Button title="SEARCH" onPress={() => this.props.navigation.navigate('Search')}></Button>
      </View>
    )

}
