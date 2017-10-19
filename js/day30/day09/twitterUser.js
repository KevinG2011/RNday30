'use strict';

import React, { Component } from 'react';
import {
	View,
	Image
} from 'react-native';
import { Util } from '../../component/common/';

class TwitterUser extends Component {
	render() {
		const { data } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.userPanel}>
					<Image
					  style={styles.panelImg}
					  source={require('./img/banner.png')}
					/>
				</View>
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
	userPanel: {
		flex: 1,
		backgroundColor: 'white',
		height: 300,
	},
	panelImg: {
		width: Util.size.width,
		height: 150,
	},
};

