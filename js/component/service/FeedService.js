
'use strict';
import React, { Component } from 'react';
import HJService from './Service';

class FeedService extends Component {
	constructor(props) {
	  super(props);
	  this.host = 'live.huajiao.com';
	  this.sendRequest = this.sendRequest.bind(this);
	}

	sendRequest(uri, params, callback) {
		HJService.get(this.host, uri, params, ([err = null, result = null]) => {
			if (callback) {
				const response = { err, result };
				callback(response);
			}
		});
	}
}


export { FeedService };
