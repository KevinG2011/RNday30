'use strict';
//TODO
import React, { Component } from 'react';
import {
	View,
	Text,
	CameraRoll
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Util } from '../../component/common/util';

class TweetPost extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	maxTextNum: 140,
	  };
	}

	render() {
		return (
			<View style={styles.contentContainer}>
				<View style={styles.inputbar}>
					<Icon name='ios-pin' size={23} color='#8899a5' />
					<Icon name='ios-camera' size={23} color='#8899a5' />
					<Icon name='ios-image' size={23} color='#8899a5' />
					<Icon name='ios-pie' size={23} color='#8899a5' />
				</View>
			</View>
		);
	}
}

export default TweetPost;

const styles = {
	contentContainer: {
		backgroundColor: '#fff',
		paddingTop: 60,
		paddingBottom: 60,
	},
	inputbar: {
		
	},
	
};

