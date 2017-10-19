'use strict';

import React, { Component } from 'react';
import {
	View
} from 'react-native';

class TwitterUser extends Component {
  props: Props;

	render() {
		const { data } = this.props;
		return (
			<View style={styles.container}>
			</View>
		);
	}
}

export default TwitterUser;

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#666',
	},
};


