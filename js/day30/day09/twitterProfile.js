'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableHighlight
} from 'react-native';
import { Util } from '../../component/common/';
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
				  	  style={[styles.control, styles.peopleControl]}
				  	>
							<Icon name="ios-people" size={30} color='#8999a5' />
				  	</TouchableHighlight>

				  	<TouchableHighlight
				  	  onPress={() => this._onPressBtn(3)}
				  	  style={[styles.control, styles.editControl]}
				  	>
							<Text style={styles.editText}>编辑个人资料</Text>
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
		width: Util.size.width,
		flexDirection: 'row',
		height: 68,
		alignItems: 'center',
		backgroundColor: '#222',
	},
	iconContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 30,
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
		marginRight: 4,
	},
	control: {
		borderWidth: 1,
		borderColor: '#8999a5',
		borderStyle: 'solid',
		borderRadius: 3,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 3,
		paddingLeft: 5,
		paddingBottom: 3,
		paddingRight: 5,
		marginRight: 8,
	},
	peopleControl: {
		width: 30,
		height: 30,
	},
	editControl: {
		width: 120,
		height: 30,
	},
	editText: {
		color: '#8999a5',
		fontSize: 14,
	},
};
