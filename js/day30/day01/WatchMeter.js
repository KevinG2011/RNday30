'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';
import { Util } from '../../common/';

class WatchMeter extends Component {
	props: {
	  sectionTime: ?string,
	  totalTime: ?string
	};

	render() {
		const { containerStyle, totalStyle, sectionStyle } = styles;
		return (
			<View style={containerStyle} >
				<Text style={totalStyle}>
				  {this.props.sectionTime}
				</Text>
				<Text style={sectionStyle}>
				  {this.props.totalTime}
				</Text>
			</View>
		);
	}
}

export default WatchMeter;

const styles = {
	containerStyle: {
		width: Util.size.width,
		height: 170,
		paddingTop: 50,
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		borderStyle: 'solid',
	},
	sectionStyle: {
		fontSize: 20,
		fontWeight: '100',
		textAlign: 'right',
		color: '#555',
		position: 'absolute',
		right: 60,
		top: 30,
	},
	totalStyle: {
		fontSize: Util.size === 375 ? 70 : 60,
		fontWeight: '100',
		color: '#222',
		right: 60,
		textAlign: 'right',
	},
};
