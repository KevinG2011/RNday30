'use strict';

import React, {
	Component,
} from 'react';

import {
	View,
	FlatList
} from 'react-native';
import { Util } from '../../component/common/';


const ITEM_WIDTH = Util.size.width;

export default class TwitterFlow extends Component {
	_getItemLayout = (data, index) => {
		const layout = {
			length: ITEM_WIDTH,
			offset: ITEM_WIDTH * index,
			index
		};
		return layout;
	};

	_renderItem = ({ item, index }) => {
		return <View />;
	};

	_keyExtractor = item => {
		return item.key;
	};

	render() {
		return (
			<View style={styles.container}>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: 'purple',
	},
};

