'use strict';

import React, { Component } from 'react';
import {
	View,
	Text
} from 'react-native';
import { Button, Util } from '../common/';

class ClockMeter extends Component {
	props: {
	  sectionTime: ?string,
	  totalTime: ?string
	};

	render() {
		const { containerStyle, totalStyle, sectionStyle } = styles.faceStyle;
		return (
			<View style={containerStyle} >
				<Text style={totalStyle}>
				  {this.props.sectionTime}
				</Text>
				<Text style={sectionStyle}>
				  {this.props.totalTime}
				</Text>
			</View>
		);
	}
}

class WatchControl extends Component {
	props: {
		onEventChanged: (event:string) => void;
	};

	constructor(props) {
	  super(props);
	  this.state = {
	  	watchOn: false,
	  	rightBtnText: '启动',
	  	rightTextColor: '#60B644',
	  	leftBtnText: '复位',
	  	underlayColor: '#fff',
	  };
	}

	onStartWatch() {
		if (!this.state.watchOn) {
			// this.props.onEventChanged('on');
			this.setState({
				rightBtnText: '停止',
				rightTextColor: '#ff0044',
				leftBtnText: '计次',
				underlayColor: '#eee',
				watchOn: true,
			});
		} else {
			// this.props.onEventChanged('off');
			this.setState({
				rightBtnText: '启动',
				rightTextColor: '#60B644',
				leftBtnText: '复位',
				underlayColor: '#eee',
				watchOn: false,
			});
		}
	}

	onAddRecord() {
		if (this.state.watchOn) {
			// this.props.onEventChanged('add');
		} else {
			// this.props.onEventChanged('reset');
			this.setState({
				leftBtnText: '计次',
			});
		}
	}

	render() {
		const rightTextStyle = { color: this.state.rightTextColor };
		return (
			<View style={styles.controlStyle.containerStyle}>
				<View style={{ flex: 1, alignItems: 'flex-start' }}>
					<Button
						style={styles.controlStyle.leftBtnStyle}
						titleStyle={styles.controlStyle.titleStyle}
						onPress={this.onAddRecord.bind(this)}
						title={this.state.leftBtnText}
						underlayColor={this.state.underlayColor}
					/>
				</View>
				<View style={{ flex: 1, alignItems: 'flex-end' }}>
					<Button
						style={styles.controlStyle.rightBtnStyle}
						titleStyle={[styles.controlStyle.titleStyle, rightTextStyle]}
						onPress={this.onStartWatch.bind(this)}
						title={this.state.rightBtnText}
						underlayColor={this.state.underlayColor}
					/>
				</View>
			</View>
		);
	}
}

class ClockView extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<ClockMeter sectionTime='00:00:00' totalTime='00:00:00' />
				<WatchControl />
			</View>
		);
	}
}

export default ClockView;

const styles = {
	faceStyle: {
		containerStyle: {
			width: Util.size.width,
			height: 170,
			paddingTop: 50,
			backgroundColor: '#fff',
			borderBottomWidth: 1,
			borderBottomColor: '#ddd',
			borderStyle: 'solid',
		},
		sectionStyle: {
			fontSize: 20,
			fontWeight: '100',
			textAlign: 'right',
			color: '#555',
			position: 'absolute',
			right: 60,
			top: 30,
		},
		totalStyle: {
			fontSize: Util.size === 375 ? 70 : 60,
			fontWeight: '100',
			color: '#222',
			right: 60,
			textAlign: 'right',
		},
	},
	controlStyle: {
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
	}
};

