import {
	TWEET_INPUT_TEXT_CHANGED,
} from '../types';

export const inputTextChanged = (text) => {
	const action = {
		type: TWEET_INPUT_TEXT_CHANGED,
		payload: text,
	};
	return action;
};

