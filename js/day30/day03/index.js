'use strict';

import React, { Component } from 'react';
import {
	StatusBar,
	View,
	FlatList
} from 'react-native';
import { Util } from '../../common/';

const ITEM_WIDTH = Util.size.width;

class TwitterScreen extends Component {
	constructor(props) {
	  super(props);
	  this.state = { };
	}

	_getItemLayout = (data, index) => {
		const layout = {
			length: ITEM_WIDTH,
			offset: ITEM_WIDTH * index,
			index
		};
		return layout;
	}

	_renderItem = ({ item, index }) => {
		return (
			<View />
		);
	}

	_keyExtractor = (item) => {
		return item.key;
	}

	render() {
		return (
			<View style={styles.container}>
		   	<StatusBar
		     	barStyle="light-content"
		   	/>
				<FlatList
					data={this.state.data}
					extraData={this.state}
					getItemLayout={this._getItemLayout}
					renderItem={this._renderItem}
					keyExtractor={this._keyExtractor}
					horizontal
					pagingEnabled
          directionalLockEnabled
          showsHorizontalScrollIndicator={false}
				/>
			</View>
		);
	}
}

const styles = {
  container: {
    flex: 1
  },
};

export default TwitterScreen;
