import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    siteTitle: "GuideKit",
                    tagline: "Premium template for modern guide sites",
                    searchPlaceholder: "Search guides...",
                    minRead: "min read",
                    verified: "Verified",
                    complete: "complete",
                    source: "Source",
                    language: "Language"
                }
            },
            de: {
                translation: {
                    siteTitle: "GuideKit",
                    tagline: "Vorlage fuer moderne Guide-Seiten",
                    searchPlaceholder: "Guides suchen...",
                    minRead: "Min. Lesezeit",
                    verified: "Verifiziert",
                    complete: "abgeschlossen",
                    source: "Quelle",
                    language: "Sprache"
                }
            }
        }
    });

export default i18n;
