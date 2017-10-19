'use strict';

import React, { Component } from 'react';
import {
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TwitterTab from '../common/twitterTab';
import TwitterUser from './twitterUser';

class TwitterApp extends Component {

	_renderTabContent = index => {
    return (
    	<TwitterUser />
    );
	}

	_onTabSelected = index => {
		console.log(index);
	}

	render() {
		return (
			<View style={styles.container}>
				<TwitterTab
					renderTabContent={this._renderTabContent}
					onTabSelected={this._onTabSelected}
					selectedIndex={0}
				/>
			</View>
		);
	}
}

export default TwitterApp;

const styles = {
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
};
