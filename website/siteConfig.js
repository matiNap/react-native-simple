const siteConfig = {
    title: 'React Native Simple',
    tagline: 'Simple components for React Native',
    url: 'https://matinap.github.io/react-native-simple/',
    baseUrl: '/react-native-simple/',
    usePrism: ['jsx'],
    projectName: 'react-native-simple',
    organizationName: 'MateuszNapieralski',
    headerLinks: [
        { doc: 'getting-started', label: 'Docs' },
        { doc: 'sign-in', label: 'Examples' },
        {
            href: 'https://github.com/matiNap/react-native-simple',
            label: 'GitHub',
            external: true,
        },
        { search: true },
    ],

    highlight: {
        theme: 'agate',
        defaultLang: 'javascript',
    },
    colors: {
        primaryColor: '#1cc613',
        secondaryColor: '#474747',
    },

    stylesheets: [
        'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap',
        '/css/code-block-buttons.css',
        '/css/side-bar.css',
    ],

    copyright: `Copyright © ${new Date().getFullYear()} Mateusz Napieralski`,

    scripts: [
        'https://buttons.github.io/buttons.js',
        'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
        '/js/code-block-buttons.js',
    ],
    onPageNav: 'separate',
    cleanUrl: true,
    repoUrl: 'https://github.com/matiNap/react-native-simple',
};

module.exports = siteConfig;
