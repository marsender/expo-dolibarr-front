import { Stack } from 'expo-router'

// https://docs.expo.dev/router/layouts/
// https://docs.expo.dev/router/advanced/stack/

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" />
			<Stack.Screen name="LoginScreen" />
			<Stack.Screen name="LoggedApp" />
			<Stack.Screen name="UnloggedApp" />
		</Stack>
	)
}
