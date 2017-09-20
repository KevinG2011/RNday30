'use strict';

import React from 'react';
import {
	View,
	Text
} from 'react-native';
import { Util } from '../../common/';

const InfoView = (props) => {
	const { style, data } = props;
	const { info, rise, down, prop, humi, dir, feel, rain, sight, uv } = data;
	return (
		<View style={[styles.container, style]}>
			<View style={styles.info}>
				<Text style={styles.infoText}>
				  {info}
				</Text>
			</View>
			<View style={styles.other}>
					<Text key='rise' style={styles.otherText}>{`日出：${rise}`}</Text>
					<Text key='down' style={styles.otherText}>{`日落：${down}`}</Text>
					<Text key='prop' style={styles.otherText}>{`降雨概率：${prop}`}</Text>
					<Text key='humi' style={styles.otherText}>{`湿度：${humi}`}</Text>
					<Text key='dir' style={styles.otherText}>{`风速：${dir}`}</Text>
					<Text key='feel' style={styles.otherText}>{`体感温度：${feel}`}</Text>
					<Text key='rain' style={styles.otherText}>{`降水量：${rain}`}</Text>
					<Text key='sight' style={styles.otherText}>{`能见度：${sight}`}</Text>
					<Text key='uv' style={styles.otherText}>{`紫外线指数：${uv}`}</Text>
			</View>
		</View>
	);
};

export default InfoView;

const styles = {
	container: {
		flex: 1,
	},
	info: {
		borderBottomWidth: Util.pixel,
		borderBottomColor: 'rgba(255,255,255,0.7)',
	},
	infoText: {
		color: '#fff',
		fontSize: 15,
		paddingTop: 10,
		paddingRight: 20,
		paddingBottom: 10,
		paddingLeft: 20,
		backgroundColor: 'transparent',
	},
	otherText: {
		color: '#fff',
		fontSize: 15,
		backgroundColor: 'transparent',
		textAlign: 'center',
	},
	other: {
		flex: 1,
		paddingTop: 10,
	}
};


