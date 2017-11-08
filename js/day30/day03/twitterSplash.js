'use strict';

import React, { Component } from 'react';
import {
	Animated,
	Easing
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Util } from '../../component/common/';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class TwitterSplash extends Component {
  static propTypes = {
    onFinished: React.PropTypes.func.isRequired,
  };

	constructor(props) {
		super(props);
		this.timer = 0;
		this.state = {
			opacityAnim: new Animated.Value(1),
			transformAnim: new Animated.Value(1),
		};
	}

	componentDidMount() {
		const { opacityAnim, transformAnim } = this.state;
	  const opaToAnim = {
			toValue: 0,
			duration: 800,
			delay: 2200,
			easing: Easing.elastic(1),
	  };
	  Animated.timing(opacityAnim, opaToAnim).start();
		const tranToAnim = {
			toValue: 15,
			duration: 1200,
			delay: 2000,
			easing: Easing.elastic(2),
		};
	  Animated.timing(transformAnim, tranToAnim).start();

	  this.timer = setTimeout(() => {
	  	const { onFinished = null } = this.props;
	  	if (onFinished !== null) {
	  		onFinished();
	  	}
	  }, 3300);
	}

	componentWillUnmount() {
		const { timer = 0 } = this;
		if (timer > 0) {
	  	clearTimeout(timer);
	  	this.timer = 0;
		}
	}

	render() {
		const { opacityAnim, transformAnim } = this.state;
		const opacityStyle = { opacity: opacityAnim };
		const transformStyle = {
			transform: [
				{
					scale: transformAnim
				},
			]
		};
		return (
			<Animated.View style={[styles.container, opacityStyle]}>
				<AnimatedIcon
					size={60}
					style={[styles.splash, transformStyle]}
					name="logo-twitter"
				/>
			</Animated.View>
		);
	}
}

export default TwitterSplash;

const styles = {
	container: {
		flex: 1,
		width: Util.size.width,
		height: Util.size.height,
    position: 'absolute',
		backgroundColor: '#1b95e0',
		alignItems: 'center',
		justifyContent: 'center',
	},
	splash: {
    position: 'relative',
    color: '#fff',
    textAlign: 'center',
	}
};

