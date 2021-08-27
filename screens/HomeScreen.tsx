import * as React from 'react';
import Flashcard from '../components/Flashcard';
import { StyleSheet, View } from 'react-native';

const HomeScreen: React.FC = (): JSX.Element => {
	return (
		<View style={styles.container}>
			<Flashcard />
		</View>
	);

};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 4,
		paddingHorizontal: 8
	}
});

export default HomeScreen;