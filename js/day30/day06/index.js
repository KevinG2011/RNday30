'use strict';

import React, { Component } from 'react';
import {
	View,
	TouchableHighlight,
	Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Util } from '../../component/common/';
import MapViewWrapper from './map';

class MapScreen extends Component {
	static navigationOptions = {
		title: 'Find My Location',
	};

	constructor(props) {
	  super(props);
	  this.state = {
	  	followsCurrentLocation: false,
	  };
	}

	_onFindMyLocation = () => {
		this.setState({
			followsCurrentLocation: true,
		});
	}

	render() {
		const { followsCurrentLocation } = this.state;
		return (
			<View style={styles.container}>
				<MapViewWrapper mapType='standard' showsUserLocation followsUserLocation={followsCurrentLocation} />
				<View style={styles.btnContainer}>
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
	},
	btnContainer: {
		width: Util.size.width,
		height: 120,
		backgroundColor: '#333',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	btn: {
		backgroundColor: '#00a803',
		width: Util.size.width - 80,
		height: 40,
		borderWidth: Util.pixel,
		borderColor: '#009302',
		borderStyle: 'solid',
		borderRadius: 4,
		marginTop: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnText: {
		textAlign: 'center',
		fontSize: 18,
		color: '#fff',
	},
};

