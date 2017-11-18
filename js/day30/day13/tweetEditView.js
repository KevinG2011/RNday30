'use strict';

import React, { Component } from 'react';
import {
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class TweetEditView extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.editbar}>
					<Icon name='ios-pin' size={23} color='#8899a5' />
					<Icon name='md-camera' size={23} color='#8899a5' />
					<Icon name='md-image' size={23} color='#8899a5' />
					<Icon name='md-pie' size={23} color='#8899a5' />
				</View>
				<View style={styles.imageGrid}>
					<View style={styles.imageIcon}>
						<Icon name='ios-camera' size={80} color='#2aa2ef' />
					</View>
				</View>
			</View>
		);
	}
}

export default TweetEditView;

const styles = {
	container: {
		flex: 1,
	},
	editbar: {

	},
	imageIcon: {

	},
};

