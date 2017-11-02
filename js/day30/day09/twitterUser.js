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
	  this._scrollView = undefined;

	  this.state = {
	  	bannerTop: 0,
	  	bannerOpacity: 1,
	  };
	}

	_onPressSettings = () => {

	}

	_onScroll = (e) => {
		const { x, y } = e.nativeEvent.contentOffset;
		const bannerTop = Math.min(0, Math.max(HEADER_TOP_MIN, -y));
		const bannerOpacity = 1.2 - (Math.abs(bannerTop) / -HEADER_TOP_MIN);
		console.log(`bannerOpacity : ${bannerOpacity}`);
		this.setState({
			bannerTop,
			bannerOpacity
		});
	}

	render() {
		const { bannerTop, bannerOpacity } = this.state;
		const bannerstyle = {
			top: bannerTop,
			opacity: bannerOpacity,
		};

		return (
			<View style={styles.container}>
		   	<StatusBar
		     	barStyle="dark-content"
		   	/>
				<ScrollView
					ref={scrollView => (this._scrollView = scrollView)}
					contentContainerStyle={styles.contentContainer}
					automaticallyAdjustContentInsets={false}
					scrollEventThrottle={60}
					onScroll={this._onScroll}
				>
				  <View style={styles.placeHolder} />
					<TwitterProfile style={styles.profile} />
					<TwitterMoreInfo style={styles.moreinfo} />
				</ScrollView>
				<TwitterHeader style={[styles.headerContainer, bannerstyle]} />
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
	headerContainer: {
		position: 'absolute',
		width: Util.size.width,
		height: 150,
		backgroundColor: 'white',
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
};

