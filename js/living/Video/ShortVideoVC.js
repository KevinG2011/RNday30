'use strict';

import React, { PureComponent } from 'react';
import {
	View,
	Text,
	FlatList,
} from 'react-native';
import { Util } from '../../component/common';
import { FeedService } from '../../component/service/';
import ShortVideoListItem from './ShortVideoListItem';

const SCREEN_WIDTH = Util.size.width;
const SCREEN_HEIGHT = Util.size.height;

class ShortVideoVC extends PureComponent {
  constructor(props) {
    super(props);
    this.loading = false;
    this.randomNum = -1;
    this.manualRefresh = true;
  	const columns = 1;
    this.state = {
    	columns,
    	cellSize: Util.size.width / columns,
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
			this.loading = false;
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
		});
	}

	_getItemLayout = (data, index) => {
		const { cellSize } = this.state;
		const layout = {
			length: cellSize,
			offset: cellSize * index,
			index
		};
		return layout;
	}

	_keyExtractor = (item, index) => `${index}`;

	_renderItem = ({ item, index }) => {
		const { cellSize } = this.state;
		return (
			<ShortVideoListItem itemData={item} itemSize={cellSize} />
		);
	}

	render() {
		if (this.loading) {
			return (
				<View style={styles.loading}>
					<Text style={styles.loadingTxt}>加载中...</Text>
				</View>
			);
		}
		const { columns, data } = this.state;
		const { data: feedData = [] } = data.feeds;
		return (
			<View style={styles.container}>
				<FlatList
					data={feedData}
					extraData={this.state}
					getItemLayout={this._getItemLayout}
					renderItem={this._renderItem}
					keyExtractor={this._keyExtractor}
					horizontal={false}
	        directionalLockEnabled
	        showsHorizontalScrollIndicator={false}
	        showsVerticalScrollIndicator={false}
	        numColumns={columns}
				/>
			</View>
		);
	}
}

export default ShortVideoVC;

const styles = {
	container: {
		backgroundColor: 'white',
		height: SCREEN_HEIGHT,
		width: SCREEN_WIDTH,
	},
	loading: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
		backgroundColor: '#666',
		justifyContent: 'center',
		alignItems: 'center',
	},
	loadingTxt: {
		textAlign: 'center',
		color: 'black',
		fontSize: 22,
	}
};

