'use strict';

import React, { Component } from 'react';
import {
	View
} from 'react-native';

type Props = {
  prop1: any;
  prop2: number;
  prop3: boolean;
  prop4: string;
  prop5: Array<Session>;
  prop6: (day: number) => void;
};

const Name = (props) => {
  props: Props;

	const { data } = props;
	return (
		<View style={styles.containerStyle}>
		</View>
	);
};

class Name extends Component {
  props: Props;

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


