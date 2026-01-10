import { Provider } from 'react-redux'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import store from '../redux/store'
import App from './App'

// process.env.LOCAL_URL = 'http://localhost:9011/'
// process.env.SITE_URL = 'https://gestion.localhost/'
// process.env.API_URL = 'https://compta.localhost/api/index.php/'
// process.env.LOCALE = 'fr-FR'
// process.env.CURRENCY = '€'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	})

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) {
		return null
	}

	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}
