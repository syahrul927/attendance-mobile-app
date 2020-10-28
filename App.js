import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreens from './src/screens/ComponentScreens';
import LandingScreen from './src/screens/LandingScreen';

// export default function App() {
// 	return (
// 		<View style={styles.container}>
// 			{/* <Text>Hello World</Text> */}
// 			{/* <ComponentScreens /> */}
// 			<HomeScreen />
// 			{/* <Text>Hi there</Text> */}
// 			<StatusBar style="auto" />
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		padding: 24,
// 	},
// });

const Stack = createStackNavigator();
function NavStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ title: 'Home Screen' }}
			/>
			<Stack.Screen
				name="ComponentScreens"
				component={ComponentScreens}
				options={{ title: 'Component Screen' }}
			/>
			<Stack.Screen
				name="LandingScreen"
				component={LandingScreen}
				options={{ title: 'Landing Screen' }}
			/>
		</Stack.Navigator>
	);
}
export default function App() {
	return (
		<NavigationContainer>
			<NavStack />
		</NavigationContainer>
	);
}
