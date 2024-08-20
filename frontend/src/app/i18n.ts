import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import vietnamese from '@lang/vietnamese.json'; // Assuming this is Vietnamese translations
import english from '@lang/english.json'; // Assuming this is English translations

// the translations
const resources = {
    en: {
        translation: english // English translations
    },
    vi: {
        translation: vietnamese // Vietnamese translations
    }
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('language') || 'en', // Load language from localStorage or default to 'en'
        fallbackLng: 'vi', // Fallback language if the selected language file is not found
        interpolation: {
            escapeValue: false // React handles escaping by default
        }
    });

export default i18n;
