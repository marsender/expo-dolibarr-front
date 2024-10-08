import { Stack } from 'expo-router'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useColorScheme } from '@/hooks/useColorScheme'
import { User } from '../entities/User'
import { selectUser, selectIsLoggedIn } from '../redux/reducers/userSlice'
import { useSelector } from 'react-redux'
import api from '../services/apiService'
import '../i18n'

export default function App() {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const user = new User(useSelector(selectUser))
	//api.setToken(user.getToken())
	const colorScheme = useColorScheme()
	const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme

	// https://docs.expo.dev/router/advanced/stack/
	return (
		<ThemeProvider value={theme}>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="loginScreen" />
				{isLoggedIn ? <Stack.Screen name="loggedApp" /> : <Stack.Screen name="unloggedApp" />}
			</Stack>
		</ThemeProvider>
	)
}
