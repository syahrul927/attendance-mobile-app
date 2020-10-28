import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = (props) => {
	console.log(props);
	const { navigation } = props;
	return (
		<View style={styles.container}>
			<Text style={styles.text}></Text>
			<View>
				<Button
					title="Go to list friends"
					onPress={() => navigation.navigate('ComponentScreens')}
				/>
			</View>
			<View style={styles.buttonBottom}>
				<Button
					title="Go to landing screen"
					color="red"
					onPress={() => navigation.navigate('LandingScreen')}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	text: {
		fontSize: 30,
	},
	buttonBottom: {
		marginTop: 10,
	},
});

export default HomeScreen;
