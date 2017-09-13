import React, { Component } from 'react';
import {
	View,
	ScrollView
} from 'react-native';
import Header from './header';
import { Util } from '../../common/';

class WeatherItem extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	render() {
		const { data } = this.props;
		return (
			<ScrollView
        directionalLockEnabled
        showsVerticalScrollIndicator
			>
				<Header data={data} />
				<View style={styles.blank} />
			</ScrollView>
		);
	}
}

export default WeatherItem;

const styles = {
	blank: {
		height: Util.size.height,
	}
};

