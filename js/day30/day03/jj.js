'use strict';

import React, { Component } from 'react';
import {
	View
} from 'react-native';


class Name extends Component {
	constructor(props) {
		super(props);
		this.state = {
			transformAnim: new Animated.Value(1),
			opacityAnim: new Animated.Value(1)
		};
	}

	componentDidMount() {
		const { transformAnim, opacityAnim } = this.state;
		const tranToAnim = {
			toValue: 50,
			duration: 1200,
			delay: 2000,
			easing: Easing.elastic(2),
		};
	  Animated.timing(transformAnim, tranToAnim).start();
	  const opaToAnim = {
			toValue: 0,
			duration: 800,
			delay: 2200,
			easing: Easing.elastic(1),
	  };
	  Animated.timing(opacityAnim, opaToAnim).start();
	}
	
	render() {
		const { data } = this.props;
		return (
			<View style={styles.container}>
			</View>
		);
	}
}

export default Name;

const styles = {
	container: {
		flex: 1,
	},
};


'use strict';

import React, {
	Component,
	Animated,
	Easing,
} from 'react';

import {
	StatusBar,
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
				<StatusBar barStyle="light-content" />
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
		flex: 1,
	},
};




