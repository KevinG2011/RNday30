import React, { PureComponent } from 'react';
import {
	View,
	FlatList,
	ActivityIndicator,
	StatusBar
} from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import axios from 'axios';
// import MyHomeListItem from './MyHomeListItem';

class MyHomeMain extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			data: [],
			page: 1,
			seed: 1,
			error: null,
			refreshing: false,
		};
		this.handleRefresh = this.handleRefresh.bind(this);
		this.handleLoadMore = this.handleLoadMore.bind(this);
	}

	componentDidMount() {
		console.log('componentDidMount');
		this.loadRemoteData();
	}

	loadRemoteData() {
		const { seed, page } = this.state;
		const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
		axios.get(url)
			.then(res => {
				this.setState({
					data: page === 1 ? res.data.results : [...this.state.data, ...res.data.results],
					error: res.error || null,
					loading: false,
					refreshing: false
				});
			})
			.catch(err => {
				this.setState({
					error: err,
					loading: false
				});
			});
		this.setState({ loading: true });
	}

	handleRefresh() {
		const { seed } = this.state;
		this.setState({
			page: 1,
			refreshing: true,
			seed: seed + 1
		},
		() => {
			this.loadRemoteData();
		});
	}

	handleLoadMore() {
		const { page } = this.state;
		console.log(page);
		this.setState({
			page: page + 1,
		},
		() => {
			this.loadRemoteData();
		});
	}

	renderSeparator = () => {
		return (
			<View
				style={{
				height: 1,
				width: '86%',
				backgroundColor: '#CED0CE',
				marginLeft: '14%',
			}}
			/>
		);
	};

	renderHeader = () => (<SearchBar placeholder="Type Here..." lightTheme round />);

	renderFooter = () => {
		if (!this.state.loading) return null;
		return (
			<View
				style={{
					paddingVertical: 20,
					borderTopWidth: 1,
					borderTopColor: '#CED0CE'
				}}
			>
				<ActivityIndicator animating size='small' />
			</View>
		);
	};

	render() {
		return (
			<List style={styles.listContainerStyle}>
        <StatusBar
          translucent={true}
          barStyle="dark-content"
        />
				<FlatList
					data={this.state.data}
					renderItem={({ item }) => (
						<ListItem
							roundAvatar
							title={`${item.name.first} ${item.name.last}`}
							subtitle={item.email}
							avatar={{ uri: item.picture.thumbnail }}
						/>
					)}
					keyExtractor={(item) => item.email}
					refreshing={this.state.refreshing}
					ListHeaderComponent={this.renderHeader}
					ListFooterComponent={this.renderFooter}
					onEndReached={this.handleLoadMore}
					onEndReachedThreshold={50}
				/>
			</List>
		);
	}
}

const styles = {
	listContainerStyle: {
		flex: 1,
		borderTopWidth: 0,
		borderBottomWidth: 0,
		paddingTop: 64,
	},
	listItemStyle: {
		borderTopWidth: 0,
		borderBottomWidth: 0
	}
};

export default MyHomeMain;
