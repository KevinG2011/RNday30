'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableHighlight,
	SegmentedControlIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Util } from '../../component/common/';

class TwitterProfile extends Component {
	_onPressBtn = (tag) => {

	}

	_onValueChange = (sender) => {

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
			  <View style={styles.infoContainer}>
			  	<Text style={styles.infoName}>Github</Text>
			  	<Text style={styles.infoAccount}>@Github</Text>
			  	<View style={styles.followContainer}>
			  		<Text style={styles.followTxt}><Text style={styles.fontEm}>183</Text> 正在关注</Text>
			  		<Text style={styles.followTxt}><Text style={styles.fontEm}>830k</Text> 关注者</Text>
			  	</View>
			  </View>
			  <View style={styles.segmentContainer}>
					<SegmentedControlIOS
						style={styles.segment}
						values={['推文', '媒体', '喜欢']}
						selectedIndex={0}
						tintColor='#2aa2ef'
						onValueChange={this._onValueChange}
					/>
			  </View>
			</View>
		);
	}
}

export default TwitterProfile;

const styles = {
	container: {
		backgroundColor: '#555',
	},
	controlContainer: {
		width: Util.size.width,
		flexDirection: 'row',
		height: 68,
		alignItems: 'center',
		backgroundColor: 'white',
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
	infoContainer: {
		backgroundColor: 'white',
		height: 60,
		paddingLeft: 15,
	},
	infoName: {
		color: '#292f33',
		fontSize: 20,
		fontWeight: '500',
		paddingTop: 15,
	},
	infoAccount: {
		color: '#66757f',
		paddingTop: 5,
	},
	followContainer: {
		flexDirection: 'row',
		backgroundColor: 'white',
		paddingTop: 5,
	},
	followTxt: {
		color: '#95a4ae',
		width: 110,
	},
	fontEm: {
		color: '#292f33',
		fontWeight: '500',
	},
	segmentContainer: {
		height: 60,
		width: null,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	segment: {
		width: Util.size.width - 30,
	},
};
