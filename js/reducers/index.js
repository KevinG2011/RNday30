import { combineReducers } from 'redux';
import TweetReducer from './tweet/tweetReducer';

export default combineReducers({
	tweet: TweetReducer,
});
