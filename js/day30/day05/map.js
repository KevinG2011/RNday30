'use strict';

import React, { Component } from 'react';
import {
	View,
	MapView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Name extends Component {
	static propTypes = {
	  mapType: React.PropTypes.oneOf(['standard', 'satellite','hybrid']),
	  showsUserLocation: React.PropTypes.bool.isRequired,
	  followUserLocation: React.PropTypes.bool.isRequired,
	}

	render() {
		const { data } = this.props;
		return (
			<View style={styles.container}>
			</View>
		);
	}
}

Name.defaultProps = {
	mapType: 'standard',
	showsUserLocation: false,
	followUserLocation: false,
}

export default Name;

const styles = {
	container: {
		flex: 1,
	},
};


