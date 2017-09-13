'use strict';

import React from 'react';
import {
	View,
	Text
} from 'react-native';
import { Util } from '../../common/';

const Header = (props) => {
	const { data } = props;
	return (
    <View style={[styles.containerStyle, props.style]}>
      <Text style={styles.city}>{data.city}</Text>
      <Text style={styles.abs}>{data.abs}</Text>
      <Text style={styles.degree}>{data.degree}</Text>
      <Text style={styles.circle}>°</Text>
    </View>
	);
};

export default Header;

const styles = {
	containerStyle: {
		width: Util.size.width,
		paddingTop: 70,
		alignItems: 'center',
		paddingBottom: 60,
		height: 300,
		backgroundColor: 'black',
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
};
