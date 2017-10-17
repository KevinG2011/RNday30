'use strict';

import React, { Component } from 'react';
import {
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TwitterTab from '../common/twitterTab';

type Props = {
  prop1: any;
  prop2: number;
  prop3: boolean;
  prop4: string;
  prop5: Array<Session>;
  prop6: (day: number) => void;
};

class TwitterApp extends Component {
  props: Props;

	_renderTabContent = index => {
    return <View style={{flex: 1}} />
	}

	_onTabSelected = index => {
		console.log(index);
	}

	render() {
		return (
			<View style={styles.container}>
				<TwitterTab
					renderTabContent={this._renderTabContent}
					onTabSelected={this._onTabSelected}
					selectedIndex={0}
				/>
			</View>
		);
	}
}

export default TwitterApp;

const styles = {
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
};


