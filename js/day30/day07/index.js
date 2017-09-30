'use strict';

import React, { Component } from 'react';
import {
	Platform,
	View,
	Text,
	Image,
	PanResponder,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Util } from '../../component/common/';

class PanGestureScreen extends Component {
	static navigationOptions = {
		title: 'Basic pan gesture',
	};

	_previousLeft = 0;
	_previousTop = 0;
	_ballProps = {};
	_ballRefView = (null : ?{ setNativeProps(props: Object): void});
	_ballRadius = 120;
	_maxLeft = Util.size.width - this._ballRadius + 20;
	_maxTop = Util.size.height - 64 - 40 - this._ballRadius;

	constructor(props) {
	  super(props);
	  this.state = {
	  	iconColor: 'rgba(255, 255, 255, 1)',
	  };

	  this._ballProps = {
	  	style: {
		  	left: this._previousLeft,
		  	top: this._previousTop,
	  	}
	  };
	}

	componentWillMount() {
	  this._panResponder = PanResponder.create({
	  	onStartShouldSetPanResponder: (evt, gestureState) => true,
	  	onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
	  	onMoveShouldSetPanResponder: (evt, gestureState) => true,
	  	onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderTerminationRequest: (evt, gestureState) => true,
			onPanResponderGrant: this._onPanGestureGrant,
      onPanResponderMove: this._onPanGestureMove,
      onPanResponderRelease: this._onPanGestureEnd,
			onPanResponderTerminate: this._onPanGestureEnd,
	  });
	}

	componentDidMount() {
		this._updateBallPosition();
	}

	_updateBallPosition = () => (this._ballRefView && this._ballRefView.setNativeProps(this._ballProps));

	_onPanGestureGrant = (evt, gestureState) => {
		console.log('_onPanGestureGrant');
		const { left, top } = this._ballProps.style;
		this._previousLeft = left;
		this._previousTop = top;
    this.setState({
			iconColor: 'rgba(255, 255, 255, 0.7)',
    });
	}

	_onPanGestureMove = (evt, gestureState) => {
		const { dx, dy } = gestureState;
		let left = this._previousLeft + dx;
		left = Math.max(left, 0);
		left = Math.min(left, this._maxLeft);

		let top = this._previousTop + dy;
		top = Math.max(top, 0);
		top = Math.min(top, this._maxTop);

		this._ballProps.style = { left, top };
		this._updateBallPosition();
	}

	_onPanGestureEnd = (evt, gestureState) => {
		console.log('_onPanGestureEnd');
		this.setState({
			iconColor: 'rgba(255, 255, 255, 1)',
		});
		this._updateBallPosition();
	}

	render() {
		const { iconColor } = this.state;
		return (
			<View style={styles.container}>
				<Image
				  style={styles.bg}
				  source={require('./img/agrass.png')}
				/>
				<View
					style={styles.ballView}
					ref={ballView => (this._ballRefView = ballView)}
					{...this._panResponder.panHandlers}
				>
        	<Icon
        		name="ios-baseball"
        		color={iconColor}
        		size={this._ballRadius}
        	/>
				</View>
			</View>
		);
	}
}

const MoveBall = StackNavigator({
	Home: { screen: PanGestureScreen },
});

export default MoveBall;

const styles = {
	container: {
		flex: 1,
	},
	bg: {
		position: 'absolute',
		resizeMode: 'stretch',
		width: Util.size.width
	},
	ballView: {
		backgroundColor: 'transparent',
		left: 0,
		right: 0,
		position: 'absolute',
	}
};

