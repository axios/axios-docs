const config = {
    build: {
        input: "./posts",
        output: "./public",
        posts: "docs",
        sassEntry: './scss/index.scss',
        sassFolder: './scss',
        sassOutput: 'index.css',
        templates: {
            home: './templates/home.ejs',
            post: './templates/post.ejs',
            'home-de': './templates/home-de.ejs'
        }
    },
    blogName: `Axios Docs`,
    ownerName: `The Axios Project`,
    description: `Promise based HTTP client for the browser and node.js`,
    navLinks: [
        {
            href: '/docs',
            text: 'Docs'
        },
        {
            href: 'https://github.com/axios/axios',
            text: 'Source'
        }
    ],
    plugins: ['plugin.js'],
    assets: './assets',
    i18n: {
        languages: {
            'en': {
                name: 'English',
                primaryName: 'English',
                path: '/',
                sidebar: [{
                    type: 'heading',
                    text: 'Getting Started'
                }, {
                    type: 'link',
                    href: '/docs/intro',
                    text: 'Introduction'
                }, {
                    type: 'link',
                    href: '/docs/example',
                    text: 'Example'
                }, {
                    type: 'link',
                    href: '/docs/post_example',
                    text: 'POST Requests'
                }, {
                    type: 'heading',
                    text: 'Axios API'
                }, {
                    type: 'link',
                    href: '/docs/api_intro',
                    text: 'Axios API'
                }, {
                    type: 'link',
                    href: '/docs/instance',
                    text: 'The Axios Instance'
                }, {
                    type: 'link',
                    href: '/docs/req_config',
                    text: 'Request Config'
                }, {
                    type: 'link',
                    href: '/docs/res_schema',
                    text: 'Response Schema'
                }, {
                    type: 'link',
                    href: '/docs/config_defaults',
                    text: 'Config Defaults'
                }, {
                    type: 'link',
                    href: '/docs/interceptors',
                    text: 'Interceptors'
                }, {
                    type: 'link',
                    href: '/docs/handling_errors',
                    text: 'Handling Errors'
                }, {
                    type: 'link',
                    href: '/docs/cancellation',
                    text: 'Cancellation'
                }, {
                    type: 'link',
                    href: '/docs/urlencoded',
                    text: 'URL-Encoding Bodies'
                }, {
                    type: 'heading',
                    text: 'Other'
                }, {
                    type: 'link',
                    href: '/docs/notes',
                    text: 'Notes'
                }]
            },
            'de': {
                name: 'Deutsch',
                primaryName: 'German',
                path: '/de',
                sidebar: [{
                    type: 'heading',
                    text: 'Loslegen mit Axios'
                }, {
                    type: 'link',
                    href: '/docs/de/intro',
                    text: 'Einführung'
                }, {
                    type: 'link',
                    href: '/docs/de/example',
                    text: 'Beispiel'
                }, {
                    type: 'link',
                    href: '/docs/de/post_example',
                    text: 'POST-Anfragen'
                }, {
                    type: 'heading',
                    text: 'Axios-API'
                }, {
                    type: 'link',
                    href: '/docs/de/api_intro',
                    text: 'Axios-API'
                }, {
                    type: 'link',
                    href: '/docs/de/instance',
                    text: 'Die Axios-Instanz'
                }, {
                    type: 'link',
                    href: '/docs/de/req_config',
                    text: 'Anfragenkonfigurationsschema'
                }, {
                    type: 'link',
                    href: '/docs/de/res_schema',
                    text: 'Antwortenschema'
                }, {
                    type: 'link',
                    href: '/docs/de/config_defaults',
                    text: 'Konfigurationsstandardwerte'
                }, {
                    type: 'link',
                    href: '/docs/de/interceptors',
                    text: 'Abfänger'
                }, {
                    type: 'link',
                    href: '/docs/de/handling_errors',
                    text: 'Errorverarbeitung'
                }, {
                    type: 'link',
                    href: '/docs/de/cancellation',
                    text: 'Anfragen abbrechen'
                }, {
                    type: 'link',
                    href: '/docs/de/urlencoded',
                    text: 'URL-Ähnlich Kodierte Anfragenkörper'
                }, {
                    type: 'heading',
                    text: 'Andere'
                }, {
                    type: 'link',
                    href: '/docs/de/notes',
                    text: 'Weitere Notizen'
                }]
            }
        },
        primary: 'en'
    }
}

module.exports = config;