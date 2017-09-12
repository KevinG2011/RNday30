import React, { Component } from 'react';
import { View } from 'react-native';
import WatchView from './day30/day01/index';

class App extends Component {
	render() {
		return (
      <WatchView />
		);
	}
}

const styles = {
  containerStyle: {
    flex: 1
  }
};

export default App;
