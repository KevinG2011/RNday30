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

	constructor(props) {
	  super(props);
	  this.state = {

	  };
	}

	componentWillMount() {
	  this._panResponder = PanResponder.create({
	  	onStartShouldSetPanResponder: (evt, gestureState) => true,
	  	onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
	  	onMoveShouldSetPanResponder: (evt, gestureState) => true,
	  	onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderGrant: (evt, gestureState) => {
        // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
        // gestureState.{x,y} 现在会被设置为0
      },
      onPanResponderMove: (evt, gestureState) => {
        // 最近一次的移动距离为gestureState.move{X,Y}
        // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
      },
			onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
        // 一般来说这意味着一个手势操作已经成功完成。
      },
			onPanResponderTerminate: (evt, gestureState) => {
        // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
        // 默认返回true。目前暂时只支持android。
        return true;
      },
	  });
	}

	render() {
		return (
			<View style={styles.container}>
				<Image
				  style={styles.bg}
				  source={require('./img/agrass.png')}
				/>
				<View style={styles.ball} ref={ballView => { this.ballView = ballView }} >
        	<Icon ref="baseball" name="ios-baseball" color={this.state.color} size={120} />
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

	},
	ball: {

	}
};

