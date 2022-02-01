import i18n from "i18next";
import { initReactI18next } from "react-i18next";

 i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: {
                    "Welcome to React": "Welcome to React and react-i18next",
                    'Software developer based in São Paulo, Brazil': "Software developer based in São Paulo, Brazil",
                    'Welcome to my personal website, here you can checkout a bit about me, my articles and my pass projects': 'Welcome to my personal website, here you can checkout a bit about me, my articles and my pass projects',
                    'About': 'About',
                    'Who is Fernando Belotto?': 'Who is Fernando Belotto?',
                }
            },
            br: {
                translation: {
                    "Welcome to React": "Bem vindo ao React",
                    "Software developer based in São Paulo, Brazil": "Desenvolvedor de software em São Paulo, Brasil",
                    'Welcome to my personal website, here you can checkout a bit about me, my articles and my pass projects': 'Bem-vindo ao meu site pessoal, aqui você pode conferir um pouco sobre mim, meus artigos e meus projetos de passe.',
                    'About': 'Sobre',
                    'Who is Fernando Belotto?': 'Quem é Fernando Belotto?',
                }
            },
            es: {
                translation: {
                    "Welcome to React": "Bem Venido al React",
                    "Software developer based in São Paulo, Brazil": "Desarrollador de software con sede en São Paulo, Brasil",
                    'Welcome to my personal website, here you can checkout a bit about me, my articles and my pass projects': 'Bienvenido a mi página web personal, aquí podrás comprobar un poco sobre mí, mis artículos y mis proyectos de pase',
                    'About': 'Sobre',
                    'Who is Fernando Belotto?': 'Quién es Fernando Belotto?',
                }
            },
        },
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });


    export default i18n