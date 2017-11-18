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
import TweetInputView from './tweetInputView';
import TweetEditView from './tweetEditView';

class TweetPost extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	maxTextNum: 140,
	  };
	}

	render() {
		return (
			<View style={styles.container}>
				<TweetInputView />
				<TweetEditView />
			</View>
		);
	}
}

export default TweetPost;

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
};

