'use strict';

import React, { Component } from 'react';
import {
	View,
	Text
} from 'react-native';

import DataStore from './dataStore';

class WeatherView extends Component {
	constructor(props) {
	  super(props);
	  const data = DataStore();
	  this.state = { data };
	  console.log(this.state.data[0]);
	}

	render() {
		return (
			<View style={styles.containerStyle}>
				<Text>11111</Text>
			</View>
		);
	}
}

const styles = {
  containerStyle: {
    flex: 1
  }
};

export default WeatherView;
