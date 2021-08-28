import * as React from 'react';
import FlashcardPreview from '../components/FlashcardPreview';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Box } from 'native-base';
import { Text } from '@ui-kitten/components';
import BottomNav from '../components/BottomNav';

const flashcards = () => {
	const arr = [];
	for (let i = 0; i < 10; i++) {
		const card = (
			<Box w={[72, 124]} style={styles.cardContainer} key={i}>
				<FlashcardPreview />
			</Box>
		);
		arr.push(card);
	}
	return arr;
}

const HomeScreen: React.FC = (): JSX.Element => {
	return (
		<View style={styles.container}>
			<Box mb={2}>
				<Box mx={2} flexDirection="row">
					<Text category="h6" style={styles.setText}>Sets</Text>
					<View style={styles.spacer} />
					<Text style={styles.setText}>View All &#62;</Text>
				</Box>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{flashcards()}
				</ScrollView>
			</Box>
			<View>
				<Box mx={2} flexDirection="row">
					<Text category="h6" style={styles.setText}>Recommended Sets</Text>
					<View style={styles.spacer} />
					<Text style={styles.setText}>View All &#62;</Text>
				</Box>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{flashcards()}
				</ScrollView>
			</View>
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
		alignSelf: 'flex-start',
		fontWeight: 'bold'
	},
	spacer: {
		flexGrow: 1
	}
});

export default HomeScreen;