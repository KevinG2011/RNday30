'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableHighlight,
	CameraRoll,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Util } from '../../component/common/';

class TweetEditView extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	images: [],
	  };
	}

	loadPhotoCompletion = (data) => {
		const assets = data.edges;
		const photos = assets.map((asset) => asset.node.image);
		this.setState({
			images: photos,
		});
	}

	loadPhotoError = (error) => {
		console.log(error);
	}

	componentDidMount() {
		const fetchParams = { first: 4 };
	  CameraRoll.getPhotos(fetchParams).done(this.loadPhotoCompletion, this.loadPhotoError);
	}

	onSendPressed() {

	}

	renderImages() {
		return this.state.images.map((image, index) => {
			return (
				<View key={index} style={styles.imageIcon}>
					<Image
					  style={styles.image}
					  source={{ uri: image.uri }}
					/>
				</View>
			);
		});
	}

	render() {
		const { remainLength } = this.props;
		const btnStateStyle = remainLength < 138 ? styles.btnActive : styles.btnNormal;
		const btnTextStyle = remainLength < 138 ? styles.btnTextActive : styles.btnTextNormal;
		return (
			<View style={styles.container}>
				<View style={styles.editContainer}>
					<View style={styles.editIcon}>
						<Icon name='ios-pin' size={23} color='#8899a5' />
						<Icon name='md-camera' size={23} color='#8899a5' />
						<Icon name='md-image' size={23} color='#8899a5' />
						<Icon name='md-pie' size={23} color='#8899a5' />
					</View>
					<View style={styles.editControl}>
						<Text style={styles.remainText}>{remainLength}</Text>
						<TouchableHighlight
						  style={[styles.btn, btnStateStyle]}
						  onPress={this.onSendPressed.bind(this)}
						>
						  <Text style={styles.btnTextStyle}>发推</Text>
						</TouchableHighlight>
					</View>
				</View>
				<View style={styles.imageGrid}>
					<View style={styles.imageIcon}>
						<Icon name='ios-camera' size={80} color='#2aa2ef' />
					</View>
					{this.renderImages()}
				</View>
			</View>
		);
	}
}

export default TweetEditView;

const styles = {
	container: {
		flex: 2,
	},
	editContainer: {
		flexDirection: 'row',
		height: 50,
		alignItems: 'center',
		justifyContent: 'space-between',
		borderTopWidth: 1,
		borderTopColor: '#a0adb7',
		borderBottomWidth: 1,
		borderBottomColor: '#ccd6dd',
	},
	editIcon: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 15,
		flex: 1,
	},
	editControl: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingRight: 15,
	},
	remainText: {
		color: '#ccd6dd',
		fontSize: 18,
		marginRight: 10,
	},
	btn: {
		height: 35,
		width: 60,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 6,
	},
	btnNormal: {
		borderColor: '#ccd6dd',
		borderWidth: 1,
	},
	btnActive: {
		backgroundColor: '#2aa2ef',
	},
	btnTextNormal: {
		color: '#ccd6dd',
		fontSize: 14,
	},
	btnTextActive: {
		color: '#fff',
		fontSize: 14,
	},
	imageGrid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	imageIcon: {
		width: Util.size.width/3,
		height: 113,
		alignItems: 'center',
		justifyContent: 'center',
		borderRightWidth: 1,
		borderRightColor: '#ddd',
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
	image: {
		width: Util.size.width / 3,
		height: 113,
	}
};

