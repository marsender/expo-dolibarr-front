import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/reducers/userSlice' // Import logout action

export default function LoggedApp() {
	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(logout()) // Dispatch logout action
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome, you're logged in!</Text>
			<Button title="Logout" onPress={handleLogout} />
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
