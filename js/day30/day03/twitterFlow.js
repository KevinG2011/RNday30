'use strict';

import React, {
	PureComponent,
} from 'react';

import {
	View,
	RefreshControl,
	FlatList,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Util } from '../../component/common/';
import TwitterFlowCell from './twitterFlowCell';

const HeaderLeft = () => {
	return <Icon name="ios-person-add" size={23} style={styles.headerLeftItem} />;
};

const Header = () => {
	return <Icon name="logo-twitter" size={27} style={styles.headerTitleItem} />;
};

const HeaderRight = () => {
	return (
		<View style={styles.headerRight}>
			<Icon name="ios-search" size={23} style={styles.headerRightItem} />
      <Icon name="ios-create" size={23} style={styles.headerRightItem} />
		</View>
	);
};


const ITEM_HEIGHT = Util.size.height;

class FlowScreen extends PureComponent {
	static navigationOptions = {
		headerTitle: (<Header />),
		headerLeft: (<HeaderLeft />),
		headerRight: (<HeaderRight />),
	};

	constructor(props) {
	  super(props);
	  this.state = {
	  	data: [
				{
					key: 1,
					src: require('./img/day3.png'),
				}
	  	],
	  	refreshing: false,
	  	timer: 0,
	  };
	}

	componentWillUnmount() {
		const { timer = 0 } = this.state;
		if (timer > 0) {
			clearTimeout(timer);
			this.state.timer = 0;
		}
	}

	_getItemLayout = (data, index) => {
		const layout = {
			length: ITEM_HEIGHT,
			offset: ITEM_HEIGHT * index,
			index
		};
		return layout;
	};

	_renderItem = ({ item, index }) => {
		return <TwitterFlowCell data={item} index={index} />;
	};

	_keyExtractor = item => {
		return item.key;
	};

	_onRefresh = () => {
		const { refreshing } = this.state;
		if (refreshing) { return; }
		this.setState({
			refreshing: true
		});
		setTimeout(() => {
			this.setState({
				refreshing: false
			});
		}, 2000);
	}

	render() {
		const { data, refreshing } = this.state;
		return (
			<View style={styles.container}>
				<FlatList
					data={data}
					extraData={this.state}
					getItemLayout={this._getItemLayout}
					renderItem={this._renderItem}
					keyExtractor={this._keyExtractor}
					refreshControl={
						<RefreshControl
							tintColor='#ddd'
							refreshing={refreshing}
							onRefresh={this._onRefresh}
						/>
					}
					directionalLockEnabled
					showsVerticalScrollIndicator
					automaticallyAdjustContentInsets={false}
				/>
			</View>
		);
	}
}

const TwitterFlow = StackNavigator({
	Home: { screen: FlowScreen },
});

export default TwitterFlow;

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#ddd',
	},
	headerLeftItem: {
		color: '#1b95e0',
		width: 30,
		marginLeft: 10,
	},
	headerTitleItem: {
		color: '#1b95e0',
		width: 30,
	},
	headerRight: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerRightItem: {
		color: '#1b95e0',
		width: 30,
		marginRight: 5,
	},
};

