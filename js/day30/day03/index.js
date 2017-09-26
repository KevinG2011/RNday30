'use strict';

import React, {
	Component
} from 'react';

import {
	StatusBar,
	View,
} from 'react-native';
import TwitterTab from './twitterTab';
import TwitterSplash from './twitterSplash';

export default class TwitterScreen extends Component {
	constructor(props) {
	  super(props);
	  this.state = { showSplash: true };
	}

	_onSplashFinished = () => this.setState({ showSplash: false });

	_renderSplash = () => {
		const { showSplash } = this.state;
		if (showSplash) {
			return <TwitterSplash onFinished={this._onSplashFinished} />;
		}

		return false;
	}

	render() {
		return (
			<View style={styles.container}>
		   	<StatusBar barStyle="dark-content" />
				<TwitterTab />
				{this._renderSplash()}
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	},
};

