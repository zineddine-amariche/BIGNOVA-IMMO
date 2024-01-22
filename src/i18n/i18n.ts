import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './en.json';
import frTranslation from './fr.json';
import arTranslation from './ar.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation },
    ar: { translation: arTranslation },
  },
  lng: 'en', // Set the default language
  fallbackLng: 'en', // Set the fallback language
  interpolation: {
    escapeValue: false, // React already escapes variables
  },
});

export default i18n;


// import { initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend' ; 
// import i18n from 'i18next'  ;


// i18n
// .use(LanguageDetector)
// .use(Backend)
// .use(initReactI18next)
// .init({
//     debug:true , 
//     fullbackLng:'en' ,
//     load:'all',
//     interpolation:{
//         escapeValue:false
//     } , 
//     order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
//     backend:{
//         loadPath:`/languages/{{lng}}/{{ns}}.json` 
//     }
// })

