import React from 'react';
import {
	View,
	ScrollView
} from 'react-native';
import HourItem from '../day02/hourItem';

const HoursView = (props) => {
	_renderItem = (hours) => (
		hours.map((item, index) => {
			return (
				<HourItem style={styles.dayItem} data={item} index={index} />
			);
		})
	);

	const { hours } = props;
	return (
		<View style={styles.container}>
			<ScrollView
	      directionalLockEnabled
	      showsVerticalScrollIndicator={false}
	      showsHorizontalScrollIndicator
	      horizontal
	   		>
				{this._renderItem(hours)}
			</ScrollView>
		</View>
	);
};

export default HoursView;

const styles = {
	container: {
		flex: 1,
	},
	dayItem: {
		flex: 1,
		width: 40,
		backgroundColor: 'transparent'
	},
};

