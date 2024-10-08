import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router' // Use expo-router's router for navigation

export default function UnloggedApp() {
	const router = useRouter()

	const handleLogin = () => {
		router.push('/LoginScreen') // Navigate to login screen
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Please log in to continue.</Text>
			<Button title="Login" onPress={handleLogin} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
		textAlign: 'center',
	},
})
