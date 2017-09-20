
import React from 'react';
import {
	View,
	Text
} from 'react-native';
import { Util } from '../../common/';

const DayItem = (props) => {
	const { data, index } = props;
	const { key, day } = data;
	return (
		<View key={key} style={styles.container}>
			<Text style={styles.text}>
			  {day}
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
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 15,
		color: '#fff',
		fontWeight: '200',
	},
};


