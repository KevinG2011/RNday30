'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class TwitterProfile extends Component {
	_onPressBtn = (tag) => {

	}

	render() {
		const { style } = this.props;
		return (
			<View style={[styles.container, style]}>
				<View style={styles.controlContainer}>
				  <View style={[styles.iconContainer]}>
						<Image
						  style={styles.icon}
						  source={require('./img/icon.png')}
						/>
				  </View>
				  <View style={styles.btnContainer}>
				  	<TouchableHighlight
				  	  onPress={() => this._onPressBtn(1)}
				  	  style={styles.settingsControl}
				  	>
							<Icon name="ios-settings" size={20} color='#8999a5' />
				  	</TouchableHighlight>

				  	<TouchableHighlight
				  	  onPress={() => this._onPressBtn(2)}
				  	  style={styles.settingsControl}
				  	>
							<Icon name="ios-people" size={20} color='#8999a5' />
				  	</TouchableHighlight>

				  	<TouchableHighlight
				  	  onPress={() => this._onPressBtn(3)}
				  	  style={styles.settingsControl}
				  	>
							<Text style={styles.editControl}>编辑个人资料</Text>
				  	</TouchableHighlight>

				  </View>
				</View>
			</View>
		);
	}
}

export default TwitterProfile;

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#555',
	},
	controlContainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'white',
		height: 80,
		alignItems: 'flex-start',
	},
	iconContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		width: 68,
		height: 68,
	},
	btnContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	settingsControl: {
		width: 30,
	},
	peopleControl: {

	},
	editControl: {

	},
};
