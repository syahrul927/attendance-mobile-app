import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ComponentScreens = () => {
	const name = 'Nauval Purnomo';
	const friends = [
		{ name: 'Tegar Machfudzi', Age: 20 },
		{ name: 'Syahrul Ataufik', Age: 21 },
		{ name: 'Ferry Agung', Age: 22 },
		{ name: 'Nauval Purnomo', Age: 23 },
		{ name: 'Bagas Novanto', Age: 24 },
		{ name: 'Emon', Age: 25 },
		{ name: 'Budi', Age: 26 },
		{ name: 'Rey', Age: 27 },
	];
	// return (
	// 	<View>
	// 		<Text style={styles.textStyle}>Getting started with React Native</Text>
	// 		<Text style={styles.nameStyle}>My name is {name}</Text>
	// 	</View>
	// );
	return (
		<FlatList
			keyExtractor={(friend) => friend.name}
			data={friends}
			renderItem={({ item }) => {
				return (
					<Text style={styles.flatList}>
						{item.name} = {item.Age} Tahun
					</Text>
				);
			}}
		/>
	);
};
const styles = StyleSheet.create({
	textStyle: {
		marginTop: 16,
		paddingVertical: 8,
		borderWidth: 4,
		borderColor: '#20232a',
		borderRadius: 6,
		backgroundColor: '#61dafb',
		color: '#20232a',
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		bottom: 10,
	},
	nameStyle: {
		marginTop: 15,
		fontWeight: 'bold',
		fontSize: 25,
		fontStyle: 'italic',
	},
	flatList: {
		marginVertical: 50,
	},
});
export default ComponentScreens;
