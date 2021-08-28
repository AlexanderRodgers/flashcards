import * as React from 'react';
import FlashcardPreview from '../components/FlashcardPreview';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Box, useBreakpointValue } from 'native-base';
import { Text } from '@ui-kitten/components';

const flashcards = () => {
	const arr = [];
	for (let i = 0; i < 10; i++) {
		const card = (
			<Box w={[72, 124]} style={styles.cardContainer} key={i}>
				<FlashcardPreview/>
			</Box>
		);
		arr.push(card);
	}
	return arr;
}

const HomeScreen: React.FC = (): JSX.Element => {
	return (
		<View style={styles.container}>
			<Box mx={2}>
				<Text category="h6" style={styles.setText}>Sets</Text>
				<View style={styles.spacer}/>
				<Text>View All &#62;</Text>
			</Box>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{flashcards()}
			</ScrollView>
		</View>
	);

};

const styles = StyleSheet.create({
	cardContainer: {
		padding: 8,
	},
	container: {
		paddingVertical: 4,
		paddingHorizontal: 8
	},
	setText: {
		alignItems: 'flex-start',
		fontWeight: 'bold'
	},
	spacer: {
		flexGrow: 1
	}
});

export default HomeScreen;