'use strict';

import React, { Component } from 'react';
import {
	View,
	ScrollView,
	Image,
} from 'react-native';
import { Util } from '../../component/common/';
import Header from './header';
import HoursView from './hourView';
import DaysView from './dayView';
import InfoView from './infoView';

class WeatherItem extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	render() {
		const { data } = this.props;
		const { hours, days } = data;
		return (
			<Image style={styles.bgImg} source={data.bg} >
				<View style={styles.flex}>
					<ScrollView
		        directionalLockEnabled
		        showsVerticalScrollIndicator
		        showsHorizontalScrollIndicator={false}
		   			>
						<Header style={styles.header} data={data} />
						<HoursView style={styles.hours} hours={hours} />
						<DaysView style={styles.days} days={days} />
						<InfoView style={styles.info} data={data} />
					</ScrollView>
				</View>
			</Image>
		);
	}
}

export default WeatherItem;

const styles = {
	bgImg: {
		flex: 1,
		width: Util.size.width,
		height: Util.size.height,
	},
	flex: {
		flex: 1,
	},
	header: {
		flex: 1,
	},
	hours: {
		flex: 1,
	},
	days: {
		flex: 1,
	},
	info: {
		flex: 1,
		height: Util.size.height / 2,
	},
};

