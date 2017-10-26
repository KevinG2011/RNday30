'use strict';

import React, { Component } from 'react';
import {
	View,
	Image
} from 'react-native';
import { Util } from '../../component/common/';

const TwitterHeader = (props) => {
	const { style } = props;
	return (
		<View style={[styles.container, style]}>
			<Image
			  style={styles.headerbg}
			  source={require('./img/banner.png')}
			/>
		</View>
	);
};

export default TwitterHeader;

const styles = {
	container: {
		width: Util.size.width,
		height: 150,
		backgroundColor: 'white',
	},
	headerbg: {
		width: Util.size.width,
		height: 150,
	},
};
