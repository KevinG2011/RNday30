import React, { Component } from 'react';
import {
  View
} from 'react-native';
// import WatchView from './day30/day01/index';
// import WeatherView from './day30/day02/index';
// import EntranceScreen from './day30/day03/index';
// import FindMyLocation from './day30/day05/index';
// import MoveBall from './day30/day07/index';
import VideoController from './living/Video/VideoController';


if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    debug: () => {},
    error: () => {},
  };
}

class App extends Component {
	render() {
		return (
      <VideoController />
		);
	}
}

export default App;
