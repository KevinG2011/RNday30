'use strict';

import React, { Component } from 'react';
import {
	View,
	Text
} from 'react-native';
import { HelloGL, SaturationGL, PieProgressGL } from './glComponent';


class GLApp extends Component {
	render() {
		const { data } = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.text}>
				  GL TEST
				</Text>
			</View>
		);
	}
}

export default GLApp;

const styles = {
	container: {
		flex: 1,
	},
	text: {
		fontWeight: '700',
		fontSize: 50,
	}
};

