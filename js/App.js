import React, { Component } from 'react';
import {
  View
} from 'react-native';
// import WatchView from './day30/day01/';
// import WeatherView from './day30/day02/';
// import EntranceScreen from './day30/day03/';
// import FindMyLocation from './day30/day05/';
// import MoveBall from './day30/day07/';
// import TwitterTab from './day30/day09/';
// import VideoController from './living/Video/VideoController';
// import TwitterApp from './day30/day09/';
// import TumblrApp from './day30/day10/';
import TweetPost from './day30/day11/';

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
      <TweetPost />
		);
	}
}

export default App;
