import i18n from "i18next";
import { initReactI18next } from "react-i18next";

 i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    'Software developer based in São Paulo, Brazil': "Software developer based in São Paulo, Brazil",
                    'Welcome to my personal website, here you can checkout a bit about me, my articles and my past projects': 'Welcome to my personal website, here you can checkout a bit about me, my articles and my pass projects',
                    'Who is Fernando Belotto?': 'Who is Fernando Belotto?',
                    'Blog': 'Blog',
                    'Projects': 'Projects',
                    'Technologies': 'Technologies',
                    'About': 'About',
                    'Contact': 'Contact',
                    'Made with ⚡️ by': 'Made with ⚡️ by',
                    'Articles about software development': 'Articles about software development',
                    'There many ways to get in touch with me': 'There many ways to get in touch with me', 
                    'Fernando is a software developer passionated about creating unique web experiences. He started his carrear in an software house base in Campinas city and there he work on Angular, React and Vue projects for both small and large brazilian companies. There he worked using all sorts of libraries, patterns and techniques. After that he start working at dLocal, integrating the first brazilian tech team in the uruguayan company. Fernando focus his develeping in performance, acessibility and responsiviness': 'Fernando is a software developer passionated about creating unique web experiences. He started his carrear in an software house base in Campinas city and there he work on Angular, React and Vue projects for both small and large brazilian companies. There he worked using all sorts of libraries, patterns and techniques. After that he start working at dLocal, integrating the first brazilian tech team in the uruguayan company. Fernando focus his develeping in performance, acessibility and responsiviness',
                    'If you want to checkout my writing, head up to the': 'If you want to checkout my writing, head up to the',
                    'That I find amazing and love to work with': 'That I find amazing and love to work with',
                    'Open source projects': 'Open source projects'
            },
        },
            br: {
                translation: {
                    "Software developer based in São Paulo, Brazil": "Desenvolvedor de software em São Paulo, Brasil",
                    'Welcome to my personal website, here you can checkout a bit about me, my articles and my pass projects': 'Bem-vindo ao meu site pessoal, aqui você pode conferir um pouco sobre mim, meus artigos e meus projetos de passe.',
                    'Who is Fernando Belotto?': 'Quem é Fernando Belotto?',
                    'About': 'Sobre',
                    'Blog': 'Blog',
                    'There many ways to get in touch with me': 'Existem muitas formas de entrar em contato comigo', 
                    'Projects': 'Projetos',
                    'Contact': 'Contato',
                    'Technologies': 'Tecnologias',
                    'Made with ⚡️ by': 'Feito com ⚡️ por',
                    'Articles about software development': 'Artigos sobre desenvolvimento de software',
                    'Fernando is a software developer passionated about creating unique web experiences. He started his carrear in an software house base in Campinas city and there he work on Angular, React and Vue projects for both small and large brazilian companies. There he worked using all sorts of libraries, patterns and techniques. After that he start working at dLocal, integrating the first brazilian tech team in the uruguayan company. Fernando focus his develeping in performance, acessibility and responsiviness': 
                    'Fernando é um desenvolvedor de software apaixonado por criar experiências únicas na web. Ele começou sua carreira em uma base de software na cidade de Campinas e lá ele trabalha em projetos Angular, Reage e Vue para pequenas e grandes empresas brasileiras. Lá ele trabalhou usando todos os tipos de bibliotecas, padrões e técnicas. Depois disso ele começou a trabalhar na dLocal, integrando a primeira equipe técnica brasileira na empresa uruguaia. Fernando foca seu desenvolvimento em desempenho, acessibilidade e responsabilidade',
                    'If you want to checkout my writing, head up to the': 'Se você quiser verificar minha escrita, vá até o',
                    'That I find amazing and love to work with': 'Que eu acho incríveis e gosto de trabalhar com',
                    'Open source projects': 'Projetos de código aberto'
                }
            },
            es: {
                translation: {
                    "Software developer based in São Paulo, Brazil": "Desarrollador de software con sede en São Paulo, Brasil",
                    'Welcome to my personal website, here you can checkout a bit about me, my articles and my pass projects': 'Bienvenido a mi página web personal, aquí podrás comprobar un poco sobre mí, mis artículos y mis proyectos de pase',
                    'Who is Fernando Belotto?': 'Quién es Fernando Belotto?',
                    'About': 'Sobre',
                    'Blog': 'Blog',
                    'Projects': 'Proyectos',
                    'Contact': 'Contato',
                    'Technologies': 'Tecnologías',
                    'Articles about software development': 'Artículos sobre desarrollo de software',
                    'There many ways to get in touch with me': 'Hay muchas maneras de ponerse en contacto conmigo', 
                    'Made with ⚡️ by': 'Hecho con ⚡️ por',
                    'Fernando is a software developer passionated about creating unique web experiences. He started his carrear in an software house base in Campinas city and there he work on Angular, React and Vue projects for both small and large brazilian companies. There he worked using all sorts of libraries, patterns and techniques. After that he start working at dLocal, integrating the first brazilian tech team in the uruguayan company. Fernando focus his develeping in performance, acessibility and responsiviness': 'Fernando es un desarrollador de software apasionado por crear experiencias web únicas. Comenzó su carrera en una empresa de software en la ciudad de Campinas y allí trabajó en proyectos de Angular, React y Vue para pequeñas y grandes empresas brasileñas. Allí trabajó utilizando todo tipo de librerías, patrones y técnicas. Luego comenzó a trabajar en dLocal, integrando el primer equipo tecnológico brasileño en la empresa uruguaya. Fernando centra su desarrollo en el rendimiento, la accesibilidad y la respuesta',
                    'If you want to checkout my writing, head up to the': 'Si quieres ver mis escritos, dirígete al',
                    'That I find amazing and love to work with': 'Que me parece increíbles y me encanta trabajar con ellos',
                    'Open source projects': 'Proyectos de código abierto'
                }
            },
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });


    export default i18n