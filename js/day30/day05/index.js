'use strict';

import React, { Component } from 'react';
import {
	View,
	TouchableHighlight,
	Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Util } from '../../component/common/';

class MapScreen extends Component {
	_onFindMyLocation = () => {
		
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight
					style={styles.btn}
					underlayColor='#00bd03'
					onPress={this._onFindMyLocation}
				>
					<Text style={styles.btnText}>
					  <Icon size={18} name='md-navigate' /> Find My Location
					</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const FindMyLocation = StackNavigator({
	Home: { screen: MapScreen },
});

export default FindMyLocation;

const styles = {
	container: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	btn: {
		backgroundColor: '#00a803',
		width: Util.size.width - 80,
		height: 40,
		borderWidth: Util.pixel,
		borderColor: '#009302',
		borderStyle: 'solid',
		borderRadius: 4,
		alignSelf: 'center',
		justifyContent: 'center',
		marginBottom: 60,
	},
	btnText: {
		textAlign: 'center',
		fontSize: 18,
		color: '#fff',
	},
};

