'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Util } from '../../component/common/';

class PanGestureScreen extends Component {
	static navigationOptions = {
		title: 'Basic pan gesture',
	};

	constructor(props) {
	  super(props);
	  this.state = {

	  };
	}


	render() {
		return (
			<View style={styles.container}>
			</View>
		);
	}
}

const MoveBall = StackNavigator({
	Home: { screen: PanGestureScreen },
});

export default MoveBall;

const styles = {
	container: {
		flex: 1,
	},
};

