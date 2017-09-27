'use strict';

import React, { Component } from 'react';
import {
	View,
} from 'react-native';
import { Util } from '../../component/common/';

import WatchMeter from './WatchMeter';
import WatchControl from './WatchControl';
import WatchRecordList from './WatchRecordList';

class WatchView extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	timer: 0,
	  	records: [], //{ id: '1', recordTime: '19:00:44' }
			initialTime: 0,
			currentTime: 0,
			recordTime: 0,
	  	timeAccumulation: 0,
	  	sectionTime: '00:00.00',
	  	totalTime: '00:00.00',
			recordCounter: 0,
	  };
	}

	componentWillUnmount() {
	  this.onStopWatch();
	  this.onResetWatch();
	}

	onStartWatch = () => {
		this.setState({
			initialTime: (new Date()).getTime(),
		});
		let countingTime,
							minute,
							second,
							milSecond,
							seccountingTime,
							secminute,
							secsecond,
							secmilSecond;

		const timer = setInterval(() => {
			this.setState({
				currentTime: (new Date()).getTime(),
			}, () => {
				countingTime = this.state.timeAccumulation + this.state.currentTime - this.state.initialTime;
				minute = Util.pad2(Math.floor(countingTime / (60 * 1000)));
				second = Util.pad2(Math.floor((countingTime - 6000 * minute) / 1000));
        milSecond = Util.pad2(Math.floor((countingTime % 1000) / 10));
        seccountingTime = countingTime - this.state.recordTime;

        secminute = Util.pad2(Math.floor(seccountingTime / (60 * 1000)));
        secsecond = Util.pad2(Math.floor((seccountingTime - 6000 * secminute) / 1000));
        secmilSecond = Util.pad2(Math.floor((seccountingTime % 1000) / 10));
        this.setState({
					totalTime: `${minute}:${second}:${milSecond}`,
					sectionTime: `${secminute}:${secsecond}:${secmilSecond}`
        });
			});
		}, 10);

		this.setState({
			timer
		});
	}

	onStopWatch = () => {
		const { timeAccumulation, currentTime, initialTime, timer } = this.state;
		if (timer !== 0) {
			clearInterval(timer);
		}
		const countingTime = timeAccumulation + currentTime - initialTime;
		this.setState({
			timeAccumulation: countingTime,
			timer: 0
		});
	}

	onAddRecord = (control) => {
		const { records, recordCounter, sectionTime } = this.state;
		const record = {
			id: recordCounter + 1,
			recordTime: sectionTime,
		};
		records.unshift(record);

		const { timeAccumulation, currentTime, initialTime } = this.state;
		this.setState({
			records,
			recordTime: timeAccumulation + currentTime - initialTime,
			recordCounter: record.id
		});
	}

	onResetWatch = () => {
		this.setState({
	  	timer: 0,
	  	records: [], //{ id: '1', recordTime: '19:00:44' }
			initialTime: 0,
			currentTime: 0,
			recordTime: 0,
	  	timeAccumulation: 0,
	  	sectionTime: '00:00.00',
	  	totalTime: '00:00.00',
			recordCounter: 0,
		});
	}

	onControlEventChanged = (control, event) => {
		switch (event) {
			case 'on':
				this.onStartWatch(control);
				break;
			case 'off':
				this.onStopWatch(control);
				break;
			case 'add':
				this.onAddRecord(control);
				break;
			case 'reset':
				this.onResetWatch(control);
				break;
			default:
				break;
		}
	}

	render() {
		const { sectionTime, totalTime } = this.state;
		return (
			<View style={{ flex: 1 }}>
				<WatchMeter sectionTime={sectionTime} totalTime={totalTime} />
				<WatchControl onEventChanged={this.onControlEventChanged} />
				<WatchRecordList data={this.state.records} reloadState={this.state} />
			</View>
		);
	}
}

export default WatchView;
