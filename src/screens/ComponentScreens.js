import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentScreens = () => {
	return <Text style={styles.textStyle}>Component Screens</Text>;
};
const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30,
		fontStyle: 'italic',
	},
});
export default ComponentScreens;
