'use strict';

import React, { PureComponent } from 'react';
import {
	View,
	Text,
	FlatList
} from 'react-native';
import { Util } from '../../common/';

class WatchRecordItem extends PureComponent {
	render() {
		const { id, item } = this.props;
		return (
			<View style={styles.itemContainerStyle}>
				<Text style={styles.itemLeftTextStyle}>
					{`计次 ${id}`}
				</Text>
				<Text style={styles.itemRightTextStyle}>
					{item.recordTime}
				</Text>
			</View>
		);
	}
}

const ITEM_HEIGHT = 44;
class WatchRecordList extends PureComponent {
	props: {
	  data: ?Arrary<Any>,
	  reloadState: {},
	}

	_getItemLayout = (data, index) => {
		const layout = {
			length: ITEM_HEIGHT,
			offset: ITEM_HEIGHT * index,
			index
		};
		console.log(layout);
		return layout;
	}

	_renderItem = (data) => {
		const { item, index } = data;
		return (
			<WatchRecordItem
				id={index + 1}
				index={index}
				item={item}
			/>
		);
	}

	_keyExtractor = (item) => {
		return item.id;
	}

	_itemSeparator = () => {
		return (
			<View style={styles.separatorStyle} />
		);
	}

	render() {
		const { reloadState } = this.props;
		return (
			<View style={[styles.containerStyle, this.props.style]}>
				<FlatList
					data={this.props.data}
					extraData={reloadState}
					getItemLayout={this._getItemLayout}
					renderItem={this._renderItem}
					ItemSeparatorComponent={this._itemSeparator}
					onEndReachedThreshold={50}
				/>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		width: Util.size.width,
		flex: 1,
	},
	separatorStyle: {
		height: Util.pixel,
		marginLeft: 12,
		marginRight: 12,
		backgroundColor: '#bbb',
	},
	itemContainerStyle: {
		height: ITEM_HEIGHT,
		flex: 1,
		paddingLeft: 42,
		paddingRight: 42,
		flexDirection: 'row',
		alignItems: 'center',
	},
	itemLeftTextStyle: {
		flex: 1,
		textAlign: 'left',
	},
	itemRightTextStyle: {
		flex: 1,
		textAlign: 'center',
	}
};

export default WatchRecordList;
