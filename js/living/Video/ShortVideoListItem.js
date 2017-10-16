'use strict';

import React, { PureComponent } from 'react';
import {
	View,
	Image
} from 'react-native';
import { Util } from '../../component/common/';

const ITEM_WIDTH = Util.size.width;

class ShortVideoListItem extends PureComponent {
	render() {
		const { type, feed, background = undefined } = this.props.itemData;
		const coverUrl = type == 6 ? background : feed.image;
		return (
			<View style={styles.container}>
				<Image
				  style={styles.coverImg}
				  source={{uri: coverUrl }}
				/>
			</View>
		);
	}
}

export default ShortVideoListItem;

const styles = {
	container: {
		width: ITEM_WIDTH,
		height: ITEM_WIDTH,
	},
	coverImg: {
		flex: 1,
	}
};


