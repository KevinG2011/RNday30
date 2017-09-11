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
			idx: 0
	  };
	  this.handleIndexChanged = this.handleIndexChanged.bind(this);
	  this.renderContent = this.renderContent.bind(this);
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
		backgroundColor: 'purple',
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
