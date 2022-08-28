import react from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<StatusBar />
				<Text>Restaurant Navigation</Text>
				<View style={styles.content}>
					<Text>Explore</Text>
					<Text>Retaurants</Text>
					<Text>Profile</Text>
				</View>
				<StatusBar style='auto' />
			</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {},
	content: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 100,
	},
});
