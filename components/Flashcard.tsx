import * as React from 'react';
import { Card, Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

type HeaderProps = {
	title: string;
	subtitle: string;
}

type FooterProps = {
	name: string;
}

const Header = ({ title, subtitle, ...rest }: HeaderProps) => (
	<View {...rest}>
		<Text style={styles.headerText} category='h5'>{title}</Text>
		<Text category='s1'>{subtitle}</Text>
	</View>
);

const Footer = ({ name }: FooterProps) => (
	<View>
		<Text category="s2">{name}</Text>
	</View>
)

const Flashcard: React.FC = (): JSX.Element => {
	return (
		<Card>
			<View style={styles.headerContainer}>
				<Header title="Spanish 5" subtitle="100 Terms" />
			</View>
			<Footer name="Alex Rodgers"/>
		</Card>
	)

};

const styles = StyleSheet.create({
	headerContainer: {
		marginBottom: 20,
	},
	headerText: {
		fontWeight: 'bold'
	}
});

export default Flashcard;