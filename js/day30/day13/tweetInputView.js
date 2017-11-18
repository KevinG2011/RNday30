'use strict';

import React, { Component } from 'react';
import {
	View,
	Image,
	TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class TweetInputView extends Component {
	constructor(props) {
	  super(props);
	  this._textInput = null;
	}

	onChangeText(text) {
		console.log(`onChangeText : ${text}`);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.iconContainer}>
					<Image style={styles.icon} source={require('./img/icon.png')} />
					<Icon name='md-close' size={25} color='#2aa2ef' />
				</View>
				<TextInput
					ref={input => (this._textInput = input)}
					style={styles.textArea}
					maxLength={140}
					multiline
					placeholder='有什么新鲜事?'
					selectionColor='#2aa2ef'
					placeholderTextColor='#ced8de'
					onChangeText={this.onChangeText.bind(this)}
				/>
			</View>
		);
	}
}

export default TweetInputView;

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		paddingTop: 32,
	},
	iconContainer: {
		flexDirection: 'row',
		paddingLeft: 15,
		paddingRight: 15,
		justifyContent: 'space-between',
	},
	icon: {
		width: 30,
		height: 30,
		borderRadius: 5,
	},
	textArea: {
		height: 355,
		padding: 15,
	},
};

