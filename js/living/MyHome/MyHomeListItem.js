import { PureComponent } from 'react';
import {
	View,
	Button
} from 'react-native';

class MyHomeListItem extends PureComponent {
	_onPress = () => {
		this.props.onPressItem(this.props.id);
	};

	render() {
		return (
			<View>
				<Button
					onPress={this._onPress}
					title="Learn More"
					color="#841584"
				/>
			</View>
		);
	}
}

export default MyHomeListItem;
