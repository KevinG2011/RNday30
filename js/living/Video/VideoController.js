import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
 
class VideoScreen extends Component {
	static navigationOptions = {
		headerTitle: '小视频',
		headerRight: (
			<TouchableOpacity
			  onPress={() => console.log('11111')}>
			  <Image
			  	style={{marginRight: 15}}
			    source={{uri: 'tab_ic_xiangji'}}
			  />
			</TouchableOpacity>
		),
		headerStyle: {
			backgroundColor: 'white',
		}
	}

	render() {
		return (
			<ScrollView
				contentContainerStyle={styles.containerStyle}
				horizontal={true}>
				<View style={styles.containerStyle}>
				</View>
				<View style={styles.containerStyle}>
				</View>
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
		paddingLeft: 10,
	},
	textStyle: {
		color: 'blue',
		textAlign: 'center',
	}
};
