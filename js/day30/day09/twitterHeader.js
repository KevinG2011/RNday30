'use strict';

import React, { Component } from 'react';
import {
	View,
	Image,
	Text,
} from 'react-native';
import { Util } from '../../component/common/';

class TwitterHeader extends Component {
	constructor(props) {
	  super(props);
		this._bgProps = {
			style: {
				opacity: 1,
			}
		};
		this._blurbgProps = {
			style: {
				opacity: 0,
			}
		};
		this._titleProps = {
			style: {
				opacity: 0,
			}
		};
		this._root = (null : ?{ setNativeProps(props: Object): void });
	  this._bgImg = (null : ?{ setNativeProps(props: Object): void });
	  this._blurbgImg = (null : ?{ setNativeProps(props: Object): void });
	  this._titleText = (null : ?{ setNativeProps(props: Object): void });
	}

	setNativeProps(nativeProps) {
		const { style } = nativeProps;
		this._bgProps.style = {
			opacity: style.opacity,
		};
		this._blurbgProps.style = {
			opacity: 1 - Math.min(1, style.opacity),
		};
		this._titleProps.style = {
			opacity: 1 - Math.min(1, style.opacity),
		};

		style.opacity = 1;
		this._root && this._root.setNativeProps(nativeProps);
		this._bgImg && this._bgImg.setNativeProps(this._bgProps);
		this._blurbgImg && this._blurbgImg.setNativeProps(this._blurbgProps);
		this._titleText && this._titleText.setNativeProps(this._titleProps);
	}

	render() {
		return (
			<View
				ref={root => (this._root = root)}
				{...this.props}
			>
				<Image
					ref={bgImg => (this._bgImg = bgImg)}
				  style={[styles.imgStyle, this._bgProps.style]}
				  source={require('./img/banner.png')}
				/>
				<Image
					ref={blurbgImg => (this._blurbgImg = blurbgImg)}
				  style={[styles.imgStyle, this._blurbgProps.style]}
				  source={require('./img/bannerBlur.png')}
				/>
				<Text
					ref={text => (this._titleText = text)}
					style={[styles.titleStyle, this._titleProps.style]}
				>
				  Github
				</Text>
			</View>
		);
	}
}

export default TwitterHeader;

const styles = {
	imgStyle: {
		width: Util.size.width,
		height: 150,
		position: 'absolute',
	},
	titleStyle: {
		bottom: 10,
		color: '#292f33',
		position: 'absolute',
		fontSize: 20,
		fontWeight: '500',
		paddingBottom: 5,
		alignItems: 'center',
		width: Util.size.width,
		textAlign: 'center',
		backgroundColor: 'transparent',
	},
};
