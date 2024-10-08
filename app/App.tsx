import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useColorScheme } from '@/hooks/useColorScheme'
import { User } from '../entities/User'
import { selectUser, selectIsLoggedIn } from '../redux/reducers/userSlice'
import { useSelector } from 'react-redux'
import api from '../services/apiService'
import '../i18n'
import LoggedApp from './LoggedApp'
import UnloggedApp from './UnloggedApp'

export default function App() {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const user = new User(useSelector(selectUser))
	//api.setToken(user.getToken())
	const colorScheme = useColorScheme()
	const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme

	return <ThemeProvider value={theme}>{isLoggedIn ? <LoggedApp /> : <UnloggedApp />}</ThemeProvider>
}
