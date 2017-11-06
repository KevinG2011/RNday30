'use strict';

import React, { Component } from 'react';
import {
	View,
	Image
} from 'react-native';
import { Util } from '../../component/common/';

class TwitterHeader extends Component {
	constructor(props) {
	  super(props);
	  this._root = (null : ?{ setNativeProps(props: Object): void });
	}

	setNativeProps(nativeProps) {
		this._root.setNativeProps(nativeProps);
	}

	render() {
		return (
			<View
				ref={root => (this._root = root)}
				{...this.props}
			>
				<Image
				  style={styles.bannerbg}
				  source={require('./img/banner.png')}
				/>
				<Image
				  style={styles.bannerBlurbg}
				  source={require('./img/bannerBlur.png')}
				/>
			</View>
		);
	}
}

export default TwitterHeader;

const styles = {
	bannerbg: {
		width: Util.size.width,
		height: 150,
		position: 'absolute',
	},
	bannerBlurbg: {
		width: Util.size.width,
		height: 150,
		position: 'absolute',
	},
};
