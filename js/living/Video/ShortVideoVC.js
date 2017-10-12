'use strict';

import React, { Component } from 'react';
import {
	View
} from 'react-native';

type Props = {
  prop1: any;
  prop2: number;
  prop3: boolean;
  prop4: string;
  prop5: Array<Session>;
  prop6: (day: number) => void;
};

class ShortVideoVC extends Component {
  props: Props;

  constructor(props) {
    super(props);
    this.refreshing = false;
    this.randomNum = -1;
    this.manualRefresh = false;

    this.state = {
    	data: []
    };
  }

	componentWillMount() {
		this.loadData(false);
	}

	sendRequest = (params) => {
		if (this.refreshing) { return };
		this.refreshing = true;

		FeedService.sendRequest('feed/getVideos', params, ({ err, result }) => {
			if (!err) {
				this.setState({
					feeds: result
				})
			} else {
				console.log(err.message);
			}
			this.refreshing = false;
		});
	}

	loadData = (isMore = false) => {
		if (this.refreshing) { return };
		this.randomNum += isMore ? 0 : 1;
		const shuffle = this.randomNum % 3 == 0 ? 0 : 1;
		const { feeds } = this.state;
		const params = {
			refresh: this.manualRefresh,
			num: 20,
			offset: feeds.offset,
			shuffle
			name: 'video',
		};
		if (!isMore) {

		} else {

		}
	}

	render() {
		return (
			<View style={styles.container}>
			</View>
		);
	}
}

export default ShortVideoVC;

const styles = {
	container: {
		flex: 1,
	},
};


