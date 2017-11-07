'use strict';

import React, { Component } from 'react';
import {
	View,
	Image,
	TouchableWithoutFeedback,
	Animated,
	Easing,
	Text,
	TouchableHighlight
} from 'react-native';
import { Util } from '../../component/common/';

const EDGE_MARGIN = 40;

class TumblrApp extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	shiftAnim: new Animated.Value(-120),
	  	isShowMenu: false
	  };
	}

	popUpMenu() {
		this.setState({
			isShowMenu: true,
		});
		const shiftToAnim = {
			toValue: EDGE_MARGIN,
			duration: 200,
			delay: 100,
      easing: Easing.elastic(1),
		};
		Animated.timing(this.state.shiftAnim, shiftToAnim).start();
	}

	dismissMenu() {
		const shiftToAnim = {
			toValue: -120,
			duration: 200,
			delay: 100,
      easing: Easing.elastic(1),
		};
		Animated.timing(this.state.shiftAnim, shiftToAnim).start();

		setTimeout(() => {
			this.setState({
				isShowMenu: false,
			});
		}, 500);
	}

	renderMenuAnimated() {
		const { isShowMenu } = this.state;
		if (isShowMenu) {
			const { shiftAnim } = this.state;
			return (
				<Image style={styles.menu} source={require('./img/tumblrblur.png')} >
					<Animated.View style={[styles.menuItem1, { left: shiftAnim }]}>
						<Image style={styles.menuImg} source={require('./img/tumblr-text.png')} />
						<Text style={styles.menuText}>Text</Text>
					</Animated.View>
					<Animated.View style={[styles.menuItem2, { right: shiftAnim }]}>
						<Image style={styles.menuImg} source={require('./img/tumblr-photo.png')} />
						<Text style={styles.menuText}>Photo</Text>
					</Animated.View>
					<Animated.View style={[styles.menuItem3, { left: shiftAnim }]}>
						<Image style={styles.menuImg} source={require('./img/tumblr-quote.png')} />
						<Text style={styles.menuText}>Quote</Text>
					</Animated.View>
					<Animated.View style={[styles.menuItem4, { right: shiftAnim }]}>
						<Image style={styles.menuImg} source={require('./img/tumblr-link.png')} />
						<Text style={styles.menuText}>Link</Text>
					</Animated.View>
					<Animated.View style={[styles.menuItem5, { left: shiftAnim }]}>
						<Image style={styles.menuImg} source={require('./img/tumblr-chat.png')} />
						<Text style={styles.menuText}>Chat</Text>
					</Animated.View>
					<Animated.View style={[styles.menuItem6, { right: shiftAnim }]}>
						<Image style={styles.menuImg} source={require('./img/tumblr-audio.png')} />
						<Text style={styles.menuText}>Audio</Text>
					</Animated.View>
					<TouchableHighlight
					  onPress={this.dismissMenu.bind(this)}
					  style={styles.dismissBtn}
					  underlayColor='rgba(0,0,0,0)'
					  activeOpacity={0}
					>
					  <Text style={styles.dismissText}>Never Mind</Text>
					</TouchableHighlight>
				</Image>
			);
		}

		return <View />;
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={this.popUpMenu.bind(this)}>
					<Image
					  style={styles.bgImg}
				  	source={require('./img/tumblr.png')}
					/>
				</TouchableWithoutFeedback>

				{this.renderMenuAnimated()}
			</View>
		);
	}
}

export default TumblrApp;

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#37465c',
	},
	bgImg: {
		width: Util.size.width,
		resizeMode: 'contain',
	},
	menu: {
		position: 'absolute',
    resizeMode: 'cover',
    width: Util.size.width,
    height: Util.size.height,
    top: 0,
    left: 0,
	},
	menuImg: {
		width: 120,
		height: 100,
		resizeMode: 'contain',
	},
	menuText: {
		width: 120,
		textAlign: 'center',
		color: '#fff',
		backgroundColor: 'transparent',
	},
	menuItem1: {
		position: 'absolute',
		left: EDGE_MARGIN,
		top: 40,
	},
	menuItem3: {
		position: 'absolute',
		left: EDGE_MARGIN,
		top: 210,
	},
	menuItem5: {
		position: 'absolute',
		left: EDGE_MARGIN,
		top: 380,
	},
	menuItem2: {
		position: 'absolute',
		right: EDGE_MARGIN,
		top: 40,
	},
	menuItem4: {
		position: 'absolute',
		right: EDGE_MARGIN,
		top: 210,
	},
	menuItem6: {
		position: 'absolute',
		right: EDGE_MARGIN,
		top: 380,
	},
	dismissBtn: {
		position: 'absolute',
		width: Util.size.width,
		justifyContent: 'center',
		alignItems: 'center',
		left: 0,
		bottom: 40,
	},
	dismissText: {
		textAlign: 'center',
		color: 'rgba(255, 255, 255, 0.2)',
		fontWeight: '700',
		backgroundColor: 'transparent',
	},
};
