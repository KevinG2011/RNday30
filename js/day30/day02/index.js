'use strict';

import React, { Component } from 'react';
import {
	View,
	FlatList
} from 'react-native';
import { Util } from '../../common/';
import DataStore from './dataStore';
import WeatherItem from './weatherItem';

const ITEM_WIDTH = Util.size.width;

class WeatherView extends Component {
	constructor(props) {
	  super(props);
	  const data = DataStore();
	  this.state = { data };
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
		const bgColor = index === 0 ? 'green' : 'purple';
		const itemStyle = {
			width: Util.size.width,
			flex: 1,
			backgroundColor: bgColor,
		};
		return (
			<WeatherItem data={item} />
		);
	}

	_keyExtractor = (item) => {
		return item.city;
	}

	render() {
		return (
			<View style={styles.containerStyle}>
				<FlatList
					data={this.state.data}
					extraData={this.state}
					getItemLayout={this._getItemLayout}
					renderItem={this._renderItem}
					keyExtractor={this._keyExtractor}
					horizontal
					pagingEnabled
          directionalLockEnabled
          showsVerticalScrollIndicator={false}
				/>
			</View>
		);
	}
}

const styles = {
  containerStyle: {
    flex: 1
  },
};

export default WeatherView;
