'use strict';

import React, {
	Component,
} from 'react';

import {
	View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Util } from '../../component/common/';

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


class FlowScreen extends Component {
	static navigationOptions = {
		headerTitle: (<Header />),
		headerLeft: (<HeaderLeft />),
		headerRight: (<HeaderRight />),
	};

	render() {
		return (
			<View style={styles.container}>
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
		backgroundColor: 'white',
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

