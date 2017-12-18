'use strict';

import React, { PureComponent } from 'react';
import {
	View,
	Image
} from 'react-native';

class ShortVideoListItem extends PureComponent {
	render() {
		const { itemData, itemSize } = this.props;
		const { type, feed, background = undefined } = itemData;
		const coverUrl = type === 6 ? background : feed.image;
		return (
			<View style={{ width: itemSize, height: itemSize }}>
				<Image
				  style={styles.coverImg}
				  source={{ uri: coverUrl }}
				/>
			</View>
		);
	}
}

export default ShortVideoListItem;

const styles = {
	coverImg: {
		flex: 1,
	}
};
