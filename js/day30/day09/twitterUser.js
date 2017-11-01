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

class TwitterUser extends Component {
	_onPressSettings = () => {

	}

	render() {
		return (
			<View style={styles.container}>
		   	<StatusBar
		     	barStyle="dark-content"
		   	/>
				<ScrollView
					contentContainerStyle={styles.contentContainer}
					automaticallyAdjustContentInsets={false}
				>
				  <View style={styles.placeHolder} />
					<TwitterProfile style={styles.profile} />
					<TwitterMoreInfo style={styles.moreinfo} />
				</ScrollView>
				<TwitterHeader style={styles.headerContainer} />
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

