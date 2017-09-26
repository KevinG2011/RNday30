'use strict';

import React, { PureComponent } from 'react';
import {
	View,
	Image
} from 'react-native';
import { Util } from '../../component/common/';

class TwitterFlowCell extends PureComponent {
	render() {
		const { index, src } = this.props.data;
		return (
			<View key={index} style={styles.container}>
				<Image
					style={styles.bgImg}
					source={src}
					resizeMode='cover'
				/>
			</View>
		);
	}
}

export default TwitterFlowCell;

const styles = {
	container: {
		width: Util.size.width,
		height: Util.size.height,
	},
	bgImg: {
		flex: 1,
	}
};

