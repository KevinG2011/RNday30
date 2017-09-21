'use strict';

import React from 'react';
import {
	View,
	ScrollView
} from 'react-native';
import { Util } from '../../component/common/';
import HourItem from '../day02/hourItem';

const HoursView = (props) => {
	const { hours } = props;
	return (
		<View style={styles.container}>
			<ScrollView
	      directionalLockEnabled
	      showsVerticalScrollIndicator={false}
	      showsHorizontalScrollIndicator={false}
	      horizontal
	   		>
				{
					hours.map((item, index) => (
						<HourItem key={item.key} style={styles.dayItem} data={item} index={index} />
					))
				}
			</ScrollView>
		</View>
	);
};

export default HoursView;

const styles = {
	container: {
		flex: 1,
		paddingTop: 10,
		paddingBottom: 10,
		borderBottomWidth: Util.pixel,
		borderTopWidth: Util.pixel,
		borderBottomColor: 'rgba(255,255,255,0.7)',
		borderTopColor: 'rgba(255,255,255,0.7)',
	},
	dayItem: {
		flex: 1,
		width: 40,
		backgroundColor: 'transparent'
	},
};

