import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/mainComponent'
import Drawer from './navigation/drawer'

export default function App() {

	return (
		<View style ={styles.container} >
			<Drawer />
		</View>
  	);
}

const styles = StyleSheet.create({
  	container: {
		flex: 1,
		backgroundColor: '#fff',
  	},
});
