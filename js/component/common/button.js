import React, { Component } from 'react';
import {
	Text,
	TouchableHighlight,
	Image
} from 'react-native';

class Button extends Component {
	_renderText = (titleStyle, title) => {
		return <Text style={titleStyle}>{title}</Text>;
	}

	_renderImage = (source = null) => {
		if (source === null) {
			return false;
		}

		return (
			<Image
				style={styles.btnStyle}
				source={require(source)}
			/>
		);
	}

	render() {
		const { style, titleStyle, onPress, title, underlayColor, source } = this.props;
		return (
			<TouchableHighlight
			  onPress={onPress}
			  style={[styles.touchStyle, style]}
			  underlayColor={underlayColor}
			>
				{_renderImage(source)}
				{_renderText(titleStyle, title) }
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
	btnStyle: {
		backgroundColor: 'transparent',
	},
	textStyle: {
		fontSize: 20,
		color: 'blue',
		textAlign: 'center',
		backgroundColor: 'white',
	}
};

export { Button };

