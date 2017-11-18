const INITIAL_STATE = {
	textLength: 0,
};

const TweetReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'tweet_input_changed': {
			return { ...state, textLength: action.payload };
		}
		default: {
			return state;
		}
	}
};

export default TweetReducer;
