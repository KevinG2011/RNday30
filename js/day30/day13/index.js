'use strict';
//TODO
import React, { Component } from 'react';
import {
	View,
	Text,
	CameraRoll
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Util } from '../../component/common/util';
import TweetInputView from './tweetInputView';
import TweetEditView from './tweetEditView';
import { inputTextChanged } from '../../actions/';

class TweetPost extends Component {
	constructor(props) {
	  super(props);
	}

	render() {
		const { remainLength } = this.props;
		return (
			<View style={styles.container}>
				<TweetInputView />
				<TweetEditView remainLength={remainLength} />
			</View>
		);
	}
}

const mapStateToProps = ({ tweet }) => {
	const { remainLength } = tweet;
	return {
		remainLength
	};
};

export default connect(mapStateToProps)(TweetPost);

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
};

