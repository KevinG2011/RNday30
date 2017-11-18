import {
	TWEET_INPUT_TEXT_CHANGED,
} from '../../actions/types';

const INITIAL_STATE = {
	maxLength: 140,
	remainLength: 140,
};

const inputTextChangedState = (state, action) => {
	const remainLength = Math.max(0, state.maxLength - action.payload.length);
	const newState = { ...state, remainLength };
	return newState;
};

const TweetReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TWEET_INPUT_TEXT_CHANGED: {
			return inputTextChangedState(state, action);
		}
		default: {
			return state;
		}
	}
};

export default TweetReducer;
