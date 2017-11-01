'use strict';

import React, { Component } from 'react';
import {
	View,
	Image
} from 'react-native';
import { Util } from '../../component/common/';

const TwitterMoreInfo = (props) => {
	const { style } = props;
	return (
		<View style={[styles.containerStyle, style]}>
			<Image
			  style={styles.bgImg}
			  source={require('./img/moreinfo.png')}
			/>
		</View>
	);
};

export default TwitterMoreInfo;

const styles = {
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'flex-start',
	},
	bgImg: {
		width: Util.size.width,
		resizeMode: 'contain'
	},
};


