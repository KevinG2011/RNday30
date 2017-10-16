'use strict';

import React, { Component } from 'react';
import {
	Dimensions,
	View,
	Text,
	TouchableOpacity,
	Image,
	ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Util } from '../../component/common';
import ShortVideoVC from './ShortVideoVC';
// import ViewPager from 'react-native-viewpager';


class VideoScreen extends Component {
	static navigationOptions = {
		rightItemStyle: {
			marginRight: 15,
			width: 18,
			height: 18
		},
		headerTitle: '小视频',
		headerRight: (
			<TouchableOpacity onPress={() => console.log('11111')}>
			  <Image
					style={{ marginRight: 15, width: 18, height: 18 }}
			    source={{ uri: 'tab_ic_xiangji' }}
			  />
			</TouchableOpacity>
		),
		headerStyle: {
			backgroundColor: 'white',
		}
	};

	constructor(props) {
	  super(props);
	  this.state = {
			titles: ['video'],
			idx: 0,
			data: [],
	  };
	}

	_handleIndexChanged = () => {
		console.log('111');
	}

	_renderContent = () => {
		const { titles } = this.state;
		return titles.map((title, idx) => (
				<ShortVideoVC
					key={title}
					index={idx}
					name={titles[idx]}
				/>
		));
	}

	render() {
		return (
			<ScrollView
				style={styles.containerStyle}
        ref='scrollview'
        horizontal
        pagingEnabled
        removeClippedSubviews
        automaticallyAdjustContentInsets={false}
        directionalLockEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentOffset={{
          x: Util.size.width * this.state.idx,
          y: 0,
        }}
        scrollEventThrottle={100}
        bounces={false}
      >
				{this._renderContent()}
			</ScrollView>
		);
	}
}

const VideoController = StackNavigator({
	Video: { screen: VideoScreen },
});

export default VideoController;

const styles = {
	containerStyle: {
		flex: 1,
	},
};
