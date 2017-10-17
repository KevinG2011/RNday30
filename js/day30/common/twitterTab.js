'use strict';

import React, { Component } from 'react';
import {
	TabBarIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  onTabSelected: (index: number) => void;
  renderTabContent: (index: number) => Component;
  selectedIndex: number;
};

export default class TwitterTab extends Component {
  props: Props;
	constructor(props) {
	  super(props);
	  const { selectedIndex } = props;
	  this.state = {
	  	selectedIndex
	  };
	}

	_onTabSelected = (index) => {
		const { selectedIndex, onTabSelected } = this.props;
		if (index !== selectedIndex) {
			this.setState({ index });
			onTabSelected(index);
		}
	};

	render() {
		const { selectedIndex, renderTabContent } = this.state;
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
          { renderTabContent() }
        </Icon.TabBarItem>

        <Icon.TabBarItem
	        title="通知"
	        iconName="ios-add-outline"
	        selectedIconName="ios-add"
	        onPress={() => this._onTabSelected(1)}
	        selected={selectedIndex === 1}
        >
        	{ renderTabContent() }
        </Icon.TabBarItem>

        <Icon.TabBarItem
	        title="私信"
	        iconName="ios-add-outline"
	        selectedIconName="ios-add"
	        onPress={() => this._onTabSelected(2)}
        	selected={selectedIndex === 2}
        >
        	{ renderTabContent() }
        </Icon.TabBarItem>

        <Icon.TabBarItem
	        title="我"
	        iconName="ios-add-outline"
	        selectedIconName="ios-add"
	        onPress={() => this._onTabSelected(3)}
	        selected={selectedIndex === 3}
        >
        	{ renderTabContent() }
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
