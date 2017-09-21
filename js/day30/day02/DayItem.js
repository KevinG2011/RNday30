'use strict';

import React from 'react';
import {
	View,
	Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Util } from '../../component/common/';

const DayItem = (props) => {
	const { data } = props;
	const { key, day, icon, high, low } = data;
	return (
		<View key={key} style={styles.container}>
			<Text style={styles.textLeft}>
			  {day}
			</Text>
			<View style={styles.iconContainer}>
				<Icon name={icon} style={styles.icon} size={25} />
			</View>
			<Text style={styles.textRight}>
			  {high}    {low}
			</Text>
		</View>
	);
};

export default DayItem;

const styles = {
	container: {
		flex: 1,
		width: Util.size.width,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingLeft: 12,
		paddingRight: 12,
	},
	textLeft: {
		flex: 1,
		fontSize: 15,
		color: '#fff',
		fontWeight: '200',
		textAlign: 'left',
		backgroundColor: 'transparent',
	},
	iconContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		color: '#fff',
		backgroundColor: 'transparent',
	},
	textRight: {
		flex: 1,
		fontSize: 15,
		color: '#fff',
		fontWeight: '200',
		textAlign: 'right',
		backgroundColor: 'transparent',
	},
};

