'use strict';

import React, { Component } from 'react';
import {
	TabBarIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TwitterFlow from './twitterFlow';

export default class TwitterTab extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	selectedIndex: 0
	  };
	}

	_onTabSelected = (selectedIndex) => {
		if (selectedIndex !== this.state.selectedIndex) {
			console.log(`selectedIndex : ${selectedIndex}`);
			this.setState({ selectedIndex });
		}
	};

	render() {
		const { selectedIndex } = this.state;
		return (
      <TabBarIOS
      	style={styles.container}
        barTintColor="#fff"
        tintColor="#1b95e0"
      >
        <Icon.TabBarItem
	        title="主页"
	        iconName="ios-add-outline"
	        selectedIconName="ios-add"
	        onPress={() => this._onTabSelected(0)}
        	selected={selectedIndex === 0}
        >
          <TwitterFlow />
        </Icon.TabBarItem>

        <Icon.TabBarItem
	        title="通知"
	        iconName="ios-add-outline"
	        selectedIconName="ios-add"
	        onPress={() => this._onTabSelected(1)}
	        selected={selectedIndex === 1}
        >
          <TwitterFlow />
        </Icon.TabBarItem>

        <Icon.TabBarItem
	        title="私信"
	        iconName="ios-add-outline"
	        selectedIconName="ios-add"
	        onPress={() => this._onTabSelected(2)}
        	selected={selectedIndex === 2}
        >
          <TwitterFlow />
        </Icon.TabBarItem>

        <Icon.TabBarItem
	        title="我"
	        iconName="ios-add-outline"
	        selectedIconName="ios-add"
	        onPress={() => this._onTabSelected(3)}
	        selected={selectedIndex === 3}
        >
          <TwitterFlow />
        </Icon.TabBarItem>

      </TabBarIOS>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
	}
};
