'use strict';

import React, { Component } from 'react';
import {
	View
} from 'react-native';
import { Button, Util } from '../../component/common/';

class WatchControl extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	isOn: false,
	  	rightBtnText: '启动',
	  	rightTextColor: '#60B644',
	  	leftBtnText: '复位',
	  	underlayColor: '#fff',
	  };
	}

	onStartWatch() {
		const { onEventChanged } = this.props;
		if (!this.state.isOn) {
			this.setState({
				rightBtnText: '停止',
				rightTextColor: '#ff0044',
				leftBtnText: '计次',
				underlayColor: '#eee',
				isOn: true,
			});
			onEventChanged(this, 'on');
		} else {
			this.setState({
				rightBtnText: '启动',
				rightTextColor: '#60B644',
				leftBtnText: '复位',
				underlayColor: '#eee',
				isOn: false,
			});
			onEventChanged(this, 'off');
		}
	}

	onAddRecord() {
		const { onEventChanged } = this.props;
		if (this.state.isOn) {
			onEventChanged(this, 'add');
		} else {
			this.setState({
				leftBtnText: '计次',
			});
			onEventChanged(this, 'reset');
		}
	}

	render() {
		const { leftBtnText, rightBtnText, underlayColor } = this.state;
		// console.log(`aaaaaa ${leftBtnText}`);
		const { containerStyle, leftBtnStyle, rightBtnStyle, titleStyle } = styles;
		const rightTextStyle = { color: this.state.rightTextColor };
		return (
			<View style={containerStyle}>
				<View style={{ flex: 1, alignItems: 'flex-start' }}>
					<Button
						style={leftBtnStyle}
						titleStyle={titleStyle}
						onPress={this.onAddRecord.bind(this)}
						title={leftBtnText}
						underlayColor={underlayColor}
					/>
				</View>
				<View style={{ flex: 1, alignItems: 'flex-end' }}>
					<Button
						style={rightBtnStyle}
						titleStyle={[titleStyle, rightTextStyle]}
						onPress={this.onStartWatch.bind(this)}
						title={rightBtnText}
						underlayColor={underlayColor}
					/>
				</View>
			</View>
		);
	}
}

export default WatchControl;

const styles = {
	containerStyle: {
		width: Util.size.width,
		height: 100,
		flexDirection: 'row',
		backgroundColor: '#f3f3f3',
		paddingLeft: 60,
		paddingRight: 60,
		alignItems: 'center',
	},
	leftBtnStyle: {
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	rightBtnStyle: {
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleStyle: {
		fontSize: 14,
		color: '#555',
		backgroundColor: 'transparent',
		alignSelf: 'center'
	},
};

