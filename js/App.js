import React, { Component } from 'react';
import { View } from 'react-native';
import ClockView from './day30/day1';

class App extends Component {
	render() {
		return (
      <View style={styles.containerStyle}>
        <ClockView />
      </View>
		);
	}
}

const styles = {
  containerStyle: {
    flex: 1
  }
};

export default App;
