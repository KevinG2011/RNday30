'use strict';

import React, { Component } from 'react';
import {
	View,
	Text
} from 'react-native';
import { Util } from '../../component/common';
import { FeedService } from '../../component/service/';

type Props = {
  name: string;
};

class ShortVideoVC extends Component {
  props: Props;

  constructor(props) {
    super(props);

    this.loading = false;
    this.randomNum = -1;
    this.manualRefresh = true;

    this.state = {
    	data: []
    };
  }

	componentWillMount() {
		this.loadData(false);
	}

	onLoadDataRefresh = (result) => {
		this.setState({
			data: result
		}, () => {
			const { data } = this.state;
			console.log('onLoadDataRefresh');
			console.log(data);
		});
	}

	onLoadDataMore = (result) => {
		const { data } = this.state;
		data.feeds.data.push(...result.feeds.data);
		const newData = { ...data };
		this.setState({
			data: newData
		}, () => {
			console.log('onLoadDataMore');
			console.log(newData);
		});
	}

	onLoadDataEnd = () => {
		const { data } = this.state;
	}

	loadData = (isMore = false) => {
		if (this.loading) { return; }
		this.loading = true;

		this.randomNum += isMore ? 0 : 1;
		const shuffle = this.randomNum % 3 === 0 ? 0 : 1;
		const { name = 'video' } = this.props;
		const params = {
			refresh: this.manualRefresh,
			num: 20,
			shuffle,
			name
		};
		if (isMore) {
			const { offset = 0 } = this.state.data.feeds;
			params.offset = offset;
		}

		FeedService.sendRequest('feed/getVideos', params, ({ err, result }) => {
			if (!err) {
				if (!isMore) {
					this.onLoadDataRefresh(result);
				} else {
					this.onLoadDataMore(result);
				}
				this.onLoadDataEnd();
			} else {
				console.log(err.message);
			}
			this.loading = false;
		});
	}

	render() {
		const { index, name } = this.props;
		return (
			<View
				key={index}
				style={styles.container}
			>
				<Text style={styles.textStyle}>
				  {name}
				</Text>
			</View>
		);
	}
}

export default ShortVideoVC;

const styles = {
	container: {
		backgroundColor: 'white',
		flex: 1,
		width: Util.size.width,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textStyle: {
		color: 'black',
		textAlign: 'center',
	}
};

