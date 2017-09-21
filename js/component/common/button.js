import React, { Component } from 'react';
import {
	Text,
	TouchableHighlight
} from 'react-native';

class Button extends Component {
	render() {
		const { style, titleStyle, onPress, title , underlayColor } = this.props;
		return (
			<TouchableHighlight
			  onPress={onPress}
			  style={[styles.touchStyle, style]}
			  underlayColor={underlayColor}
			 >
			  <Text style={[styles.textStyle,titleStyle]}>
			  	{title}
			  </Text>
			</TouchableHighlight>
		);
	}
}

const styles = {
	touchStyle: {
		width: 60,
		height: 44,
		backgroundColor: 'black',
	},
	textStyle: {
		fontSize: 20,
		color: 'blue',
		textAlign: 'center',
		backgroundColor: 'white',
	}
};

export { Button };

