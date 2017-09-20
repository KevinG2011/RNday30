'use strict';

import React from 'react';
import {
	View,
	Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HourItem = (props) => {
	const { data, index, style } = props;
	const { key, time, icon, degree, color } = data;
	const timeStyles = [styles.text, styles.time];
	const degreeStyles = [styles.text, styles.degree];
	if (index === 0) {
		timeStyles.push(styles.bold);
		degreeStyles.push(styles.bold);
	}
	const iconColor = { color };

	return (
		<View key={key} style={[styles.container, style]}>
      <Text style={timeStyles}>{time}</Text>
      <Icon
      	style={[styles.icon, iconColor]}
      	name={icon}
      	size={25}
      />
      <Text style={degreeStyles}>{degree}</Text>
		</View>
	);
};

export default HourItem;

const styles = {
	container: {
		width: 40,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	text: {
		color: '#fff',
		textAlign: 'center',
	},
	bold: {
		fontSize: 13,
		fontWeight: '500',
	},
	time: {
		fontSize: 12,
	},
	degree: {
		fontSize: 12,
		paddingTop: 5,
	},
	icon: {
		paddingTop: 5,
	},
};

