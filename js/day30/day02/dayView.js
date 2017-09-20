'use strict';

import React from 'react';
import {
	View
} from 'react-native';
import { Util } from '../../common/';
import DayItem from '../day02/dayItem';

const DaysView = (props) => {
	const { days } = props;
	return (
		<View style={styles.container}>
		{
			days.map((item, index) => (
					<DayItem style={styles.dayItem} data={item} index={index} />
			))
		}
		</View>
	);
};

export default DaysView;

const styles = {
	container: {
		flex: 1,
		paddingTop: 10,
		paddingBottom: 10,
		borderBottomWidth: Util.pixel,
		borderBottomColor: 'rgba(255,255,255,0.7)',
	},
};

