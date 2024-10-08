import { useState } from 'react'
import { Stack } from 'expo-router'
import { Link } from 'expo-router'
import { StyleSheet, Image, Button } from 'react-native'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useTranslation } from 'react-i18next'
import ThemedTextInput from '../components/ThemedTextInput'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'

export default function LoginScreen() {
	const { t } = useTranslation()
	const [email, setEmail] = useState({ value: '', error: '' })
	const [password, setPassword] = useState({ value: '', error: '' })

	const onLoginPressed = () => {
		const emailError = emailValidator(email.value)
		const passwordError = passwordValidator(password.value)
		if (emailError || passwordError) {
			setEmail({ ...email, error: emailError })
			setPassword({ ...password, error: passwordError })
			return
		}
		// navigation.reset({
		// 	index: 0,
		// 	routes: [{ name: 'HomeScreen' }],
		// })
	}

	return (
		<>
			<Stack.Screen options={{ headerShown: false }} />
			<ParallaxScrollView headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }} headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />}>
				<ThemedView style={styles.container}>
					<ThemedText type="title">{t('login.title')}</ThemedText>
					<ThemedTextInput label="Email" returnKeyType="next" value={email.value} onChangeText={(text) => setEmail({ value: text, error: '' })} error={!!email.error} errorText={email.error} autoCapitalize="none" textContentType="emailAddress" keyboardType="email-address" />
					<ThemedTextInput label="Password" returnKeyType="done" value={password.value} onChangeText={(text) => setPassword({ value: text, error: '' })} error={!!password.error} errorText={password.error} secureTextEntry />
					<Button title="Log in" onPress={onLoginPressed} />
					<Link href="/" style={styles.link}>
						<ThemedText type="link">Go to home screen!</ThemedText>
					</Link>
				</ThemedView>
			</ParallaxScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	link: {
		marginTop: 5,
		paddingVertical: 5,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
})
