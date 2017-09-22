'use strict';

import React, {
	Component
} from 'react';

import {
	StatusBar,
	View,
} from 'react-native';
import TwitterTab from './twitterTab';


export default class TwitterScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
		   	<StatusBar barStyle="light-content" />
				<TwitterTab />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	},
};

