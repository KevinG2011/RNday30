'use strict';

import React, { Component } from 'react';
import {
	View,
	ScrollView,
	Slider,
	Text
} from 'react-native';
import { Surface } from 'gl-react-native';
import { Util } from '../../component/common/util';
import { HelloGL, SaturationGL, PieProgressGL } from './glComponent';

class GLApp extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	gradient: 0,
	  	saturation: 1,
	  	progress: 0,
	  };
	}

	render() {
		const { gradient, saturation, progress } = this.state;
		return (
			<ScrollView
			  contentContainerStyle={styles.contentContainer}
			>
			  <View style={styles.titleContainer}>
			  	<Text style={styles.text}>Gradients:</Text>
					<Surface width={Util.size.width} height={200}>
						<HelloGL value={gradient} />
					</Surface>
					<Slider
						style={styles.slider}
						maximumValue={1}
						value={0}
						onValueChange={value => this.setState({ gradient: value })}
					/>
			  </View>

			  <View style={styles.titleContainer}>
			  	<Text style={styles.text}>Satuation:</Text>
					<Surface width={Util.size.width} height={200}>
						<SaturationGL
							factor={saturation}
							image={{ uri: 'gl' }}
						/>
					</Surface>
					<Slider
						style={styles.slider}
						maximumValue={5}
						value={1}
						onValueChange={value => this.setState({ saturation: value })}
					/>
			  </View>
			  <View style={styles.titleContainer}>
			  	<Text style={styles.text}>Progress Pie:</Text>
					<Surface width={Util.size.width} height={200} backgroundColor='transparent'>
						<PieProgressGL progress={progress} />
					</Surface>
					<Slider
						style={styles.slider}
						maximumValue={1}
						value={0}
						onValueChange={value => this.setState({ progress: value })}
					/>
			  </View>
			</ScrollView>
		);
	}
}

export default GLApp;

const styles = {
	contentContainer: {
		backgroundColor: '#fff',
		paddingTop: 60,
	},
	titleContainer: {
		alignItems: 'center',
		borderStyle: 'solid',
		borderTopWidth: Util.pixel,
		borderTopColor: '#aaa',
		paddingTop: 5,
		paddingBottom: 15,
	},
	slider: {
		marginTop: 15,
		width: Util.size.width - 40,
		height: 22,
	},
	text: {
		fontSize: 16,
	}
};

