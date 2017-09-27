'use strict';

import React, { Component } from 'react';
import {
	View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import { Util } from '../../component/common/';

class MapViewWrapper extends Component {
	static propTypes = {
	  mapType: MapView.propTypes.mapType,
	  showsUserLocation: MapView.propTypes.showsUserLocation,
	  followsUserLocation: MapView.propTypes.followsUserLocation,
	}

	constructor(props) {
	  super(props);
	  this.state = {
	  	isFirstLoad: true,
	  	mapRegion: undefined,
	  	annotations: [],
	  };
	}

	_onRegionChangeComplete = ({ latitude, longitude }) => {
		const { isFirstLoad } = this.state;
		if (isFirstLoad) {
			this.setState({
				isFirstLoad: false,
				annotations: [{ latitude, longitude, title: 'Your Are Here.' }],
			});
		}
	}

	render() {
		const { showsUserLocation, followsUserLocation } = this.props;
		const { mapRegion } = this.state;
		console.log('showsUserLocation :' + showsUserLocation);
		console.log('followsUserLocation :' + followsUserLocation);
		return (
			<View style={styles.container}>
			  <MapView
			  	style={styles.map}
			    region={mapRegion}
			    onRegionChangeComplete={this._onRegionChangeComplete}
			    showsUserLocation={showsUserLocation}
			    followsUserLocation={followsUserLocation}
			  />
			</View>
		);
	}
}

MapViewWrapper.defaultProps = {
	mapType: 'standard',
	showsUserLocation: true,
	followsUserLocation: false,
};

export default MapViewWrapper;

const styles = {
	container: {
		flex: 1,
	},
	map: {
		flex: 1,
	},
};

