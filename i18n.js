import i18n from 'i18next'
import { fr, en } from './locales'
import { initReactI18next } from 'react-i18next'

const resources = {
	'fr-FR': { translation: fr },
	'en-US': { translation: en },
}

process.env.LOCALE = 'fr-FR'

const initI18n = async () => {
	const savedLanguage = process.env.LOCALE
	// let savedLanguage = await AsyncStorage.getItem("language");
	// if (!savedLanguage) {
	//   savedLanguage = Localization.locale;
	// }

	i18n.use(initReactI18next).init({
		compatibilityJSON: 'v3',
		resources,
		lng: savedLanguage,
		fallbackLng: 'en-US',
		interpolation: {
			escapeValue: false,
		},
	})
}

initI18n()

export default i18n
