'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,

} from 'react-native';
import { Util } from '../../common/';


class Header extends Component {
	render() {
		const { data } = this.props;
		const { city, abs, degree, today } = data;
		const { week, day, high, low } = today;
		return (
			<View style={[styles.containerStyle, this.props.style]}>
		    <View style={styles.topContainer}>
		      <Text style={styles.city}>{city}</Text>
		      <Text style={styles.abs}>{abs}</Text>
		      <Text style={styles.degree}>{degree}</Text>
		      <Text style={styles.circle}>°</Text>
		    </View>
				<View style={styles.dayContainer}>
					<View style={styles.dayHeader}>
						<View style={styles.headerLeft}>
		      		<Text style={[styles.dayFont, styles.dayWeek]}>{week}</Text>
		      		<Text style={[styles.dayFont, styles.dayDay]}>{day}</Text>
						</View>
						<View style={styles.headerRight}>
							<Text style={[styles.dayFont, styles.dayHigh]}>{high}</Text>
							<Text style={[styles.dayFont, styles.dayLow]}>{low}</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

export default Header;

const styles = {
	containerStyle: {
		flex: 1,
		backgroundColor: 'transparent',
	},
	topContainer: {
		flex: 1,
		paddingTop: 70,
		alignItems: 'center',
		paddingBottom: 60,
	},
	city: {
    fontSize: 25,
    color: '#fff',
    paddingBottom: 5,
    backgroundColor: 'transparent'
	},
	abs: {
    fontSize: 15,
    color: '#fff',
    backgroundColor: 'transparent'
	},
	degree: {
    fontSize: 85,
    color: '#fff',
    fontWeight: '100',
	},
	circle: {
    fontSize: 35,
    color: '#fff',
    fontWeight: '300',
    position: 'absolute',
    top: 130,
    right: Util.size.width/2-55,
	},
	dayContainer: {
		flex: 1,
		backgroundColor: '#333',
	},
	dayHeader: {
		height: 20,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingLeft: 20,
		paddingRight: 20,
		backgroundColor: '#222',
	},
	dayFont: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '400',
	},
	dayDay: {
		marginLeft: 12,
	},
	headerLeft: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	headerRight: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	dayHigh: {
		marginRight: 12,
	},
	hourListContainer: {
		flex: 1,
	},
	dayItem: {
		flex: 1,
		width: 40,
		backgroundColor: 'transparent'
	},
};
