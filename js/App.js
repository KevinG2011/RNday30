import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/';
import VideoController from './living/Video/VideoController';
// import WatchView from './day30/day01/';
// import WeatherView from './day30/day02/';
// import EntranceScreen from './day30/day03/';
// import FindMyLocation from './day30/day05/';
// import MoveBall from './day30/day07/';
// import TwitterTab from './day30/day09/';
// import TwitterApp from './day30/day09/';
// import TumblrApp from './day30/day10/';
// import TweetPost from './day30/day13/';

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
      <Provider store={createStore(reducers)}>
        <VideoController />
      </Provider>
		);
	}
}

export default App;
