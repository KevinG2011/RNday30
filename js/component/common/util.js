import React from 'react';
import {
	PixelRatio,
	Dimensions
} from 'react-native';

const Util = {
	ratio: PixelRatio.get(),
	pixel: 1 / PixelRatio.get(),
	size: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
	pad2: (d) => {
		return (d < 10) ? `0${d}` : `${d}`;
	}
};


export { Util };
