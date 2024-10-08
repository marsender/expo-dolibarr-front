import { Link } from 'expo-router'
import { StyleSheet, Image } from 'react-native'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useTranslation } from 'react-i18next'

export default function LoginScreen() {
	const { t } = useTranslation()

	return (
		<ParallaxScrollView headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }} headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />}>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">{t('login.title')}</ThemedText>
				<Link href="/" style={styles.link}>
					<ThemedText type="link">Go to home screen!</ThemedText>
				</Link>
			</ThemedView>
		</ParallaxScrollView>
	)
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
})
