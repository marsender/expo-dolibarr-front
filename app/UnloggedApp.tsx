import { Stack } from 'expo-router'
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router' // Use expo-router's router for navigation
import { useTranslation } from 'react-i18next'

export default function UnloggedApp() {
	const { t } = useTranslation()
	const router = useRouter()

	const handleLogin = () => {
		router.push('/LoginScreen') // Navigate to login screen
	}

	return (
		<>
			<Stack.Screen options={{ headerShown: false }} />
			<View style={styles.container}>
				<Text style={styles.title}>{t('app.title')}</Text>
				<Button title={t('login.title')} onPress={handleLogin} />
			</View>
		</>
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
