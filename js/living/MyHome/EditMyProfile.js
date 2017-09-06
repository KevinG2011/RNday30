import React, { Component } from 'react';
import {
	View,
	Text,
	// List,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class EditScreen extends Component {
	static navigationOptions = {
		title: '个人资料',
	};

	render() {
		return (
			<View>
				<Text>个人资料详情</Text>
			</View>
		);
	}
}

const EditMyProfile = StackNavigator({
	Home: { screen: EditScreen }
});

export default EditMyProfile;
