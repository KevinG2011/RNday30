'use strict';

import React, { Component } from 'react';
import {
	View,
	Image,
	ScrollView,
	StatusBar,
} from 'react-native';
import { Util } from '../../component/common/';
import TwitterHeader from './twitterHeader';
import TwitterProfile from './twitterProfile';
import TwitterMoreInfo from './twitterMoreInfo';

const HEADER_TOP_MIN = -75;

class TwitterUser extends Component {
	constructor(props) {
	  super(props);
	  this._scrollView = null;
	  this._banner = (null : ?{ setNativeProps(props: Object): void });
	  this._bannerProps = {
	  	style: {
	  		top: 0,
	  		opacity: 1,
	  	},
	  };
	}

	_onScrollViewDidScroll = (e) => {
		const { x, y } = e.nativeEvent.contentOffset;
		const bannerTop = Math.min(0, Math.max(HEADER_TOP_MIN, -y));
		const bannerOpacity = 1 - (Math.abs(bannerTop) / -HEADER_TOP_MIN);
		this._bannerProps.style = {
			top: bannerTop,
			opacity: bannerOpacity,
		};
		//Direct Manipulation
		this._banner && this._banner.setNativeProps(this._bannerProps);
	}

	render() {
		return (
			<View style={styles.container}>
		   	<StatusBar
		     	barStyle="dark-content"
		   	/>
				<ScrollView
					ref={scrollView => (this._scrollView = scrollView)}
					contentContainerStyle={styles.contentContainer}
					automaticallyAdjustContentInsets={false}
					scrollEventThrottle={30}
					onScroll={this._onScrollViewDidScroll}
				>
				  <View style={styles.placeHolder} />
					<TwitterProfile style={styles.profile} />
					<TwitterMoreInfo style={styles.moreinfo} />
				</ScrollView>
				<TwitterHeader
					ref={banner => (this._banner = banner)}
					style={[styles.banner, this._bannerProps.style]}
				/>
			</View>
		);
	}
}

export default TwitterUser;

const styles = {
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	contentContainer: {
		width: Util.size.width,
		height: Util.size.height + 150,
	},
	placeHolder: {
		width: Util.size.width,
		height: 150,
		backgroundColor: 'white',
	},
	profile: {
		width: null,
		height: 68 + 120,
	},
	moreinfo: {
		flex: 1,
	},
	banner: {
		position: 'absolute',
		width: Util.size.width,
		height: 150,
		backgroundColor: 'white',
	}
};

