'use strict';

import React, { Component } from 'react';
import {
	View,
	Text
} from 'react-native';
import { Util } from '../../component/common/util';

class GLApp extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	render() {
		return (
			<View style={styles.contentContainer}>Text</View>
		);
	}
}

export default GLApp;

const styles = {
	contentContainer: {
		backgroundColor: '#fff',
		paddingTop: 60,
		paddingBottom: 60,
	}
};

