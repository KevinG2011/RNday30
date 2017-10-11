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
// import ViewPager from 'react-native-viewpager';
import { FeedService } from '../../component/service/';


const deviceWidth = Dimensions.get('window').width;

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
			titles: ['推荐', '新鲜'],
			idx: 0,
			data: [],
	  };
	  this.handleIndexChanged = this.handleIndexChanged.bind(this);
	  this.renderContent = this.renderContent.bind(this);
	}

	componentWillMount() {
		const params = {
			refresh: 1,
			num: 20,
			shuffle: 0,
			name: 'video',
		};
		FeedService.sendRequest('feed/getVideos', params, ({ err, result }) => {
			console.log(err.msg);
			if (!err) {
				console.log(result);
			} else {
				console.log(err.msg);
			}
		});
	}

	handleIndexChanged() {
		console.log('111');
	}

	renderContent() {
		const { titles } = this.state;
		return titles.map((title, idx) => (
				<View style={styles.pageStyle} key={titles[idx]}>
					<Text style={styles.textStyle}>
					  {titles[idx]}
					</Text>
				</View>
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
          x: deviceWidth * this.state.idx,
          y: 0,
        }}
        scrollEventThrottle={100}
        bounces={false}
      >
				{this.renderContent()}
			</ScrollView>
		);
	}
}

const VideoController = StackNavigator(
	{
		Video: {
			screen: VideoScreen
		}
	},
  {
    initialRouteName: 'Video',
  }
);

export default VideoController;

const styles = {
	containerStyle: {
		flex: 1,
	},
	pageStyle: {
		backgroundColor: 'white',
		width: deviceWidth,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textStyle: {
		color: 'black',
		textAlign: 'center',
	}
};
