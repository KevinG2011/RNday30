import React, { PureComponent } from 'react';
import {
	View,
	FlatList,
	ActivityIndicator,
	Text
} from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import axios from 'axios';
// import MyHomeListItem from './MyHomeListItem';

class MyHomeList extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			data: [],
			page: 1,
			seed: 1,
			error: null,
			refreshing: false
		};
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
				console.log(res);
				this.setState({
					data: this.page === 1 ? res.results : [...this.state.data, ...res.results],
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
		this.setState({
			page: 1,
			refreshing: true,
			seed: this.state.seed + 1
		},
		() => {
			this.loadRemoteData();
		});
	}

	handleLoadMore() {
		this.setState({
			page: this.state.page + 1,
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

	renderHeader = () => {
		return <SearchBar placeholder="Type Here..." lightTheme round />;
	};

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
				<ActivityIndicator animating size='large' />
			</View>
		);
	};

	render () {
		console.log('render');
		return (
			<List>
				<FlatList
					style={styles.listStyle}
					data={this.state.data}
					renderItem={({ item }) => {
						return (
							<ListItem
								roundAvatar
								title={item.name.first}
								subtitle={item.email}
								avatar={{ uri: item.picture.thumbnail }}
								containerStyle={{ borderBottomWidth: 0 }}
							/>
						);
					}}
					keyExtractor={(item) => item.email}
					ItemSeparatorComponent={this.renderSeparator}
					ListHeaderComponent={this.renderHeader}
					ListFooterComponent={this.renderFooter}
					onRefresh={this.handleRefresh}
					refreshing={this.state.refreshing}
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
		backgroundColor: 'black',
    justifyContent: 'center',
	},
	textStyle: {
		textAlign: 'center',
		color: 'white',
		fontSize: 22,
    fontWeight: 'bold',
	}
};

export default MyHomeList;
