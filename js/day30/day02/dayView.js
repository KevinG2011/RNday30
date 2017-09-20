
import Reactfrom 'react';
import {
	View
} from 'react-native';
import DayItem from '../day02/dayItem';

const DaysView = (props) => {

	_renderItem = (days) => (
		days.map((item, index) => {
			return (
				<DayItem style={styles.dayItem} data={item} index={index} />
			);
		})
	);
	const { days } = props;
	return (
		<View style={styles.container}>
				{this._renderItem(days)}
		</View>
	);
};

export default DaysView;

const styles = {
	container: {
		flex: 1,
	},
};


