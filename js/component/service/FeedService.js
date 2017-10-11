
'use strict';
import React, { Component } from 'react';
import HJService from './Service';

const host = 'live.huajiao.com';
const FeedService = {
	sendRequest: (uri, params, callback) => {
		HJService.get(host, uri, params, (err = null, result = null) => {
			if (callback) {
				const response = { err, result };
				callback(response);
			}
		});
	},

};

export { FeedService };
