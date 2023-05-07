/**
 * Configuration for the english (original) translation
 */

module.exports = {
  // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
  display: "Українська",
  prefix: "/uk/",
  // `p` stands for `paragraph`. This will contain translations of full text blocks
  p: {
    headline: "HTTP-клієнт для браузера та node.js на основі Promise",
    subhead: `Axios - це простий HTTP-клієнт для браузера та node.js на основі Promise.
              Axios надає просту у використанні бібліотеку в невеликому пакеті з дуже 
              розширюваним інтерфейсом.`,
  },
  // `t` stands fot `translation`. This will contain translations of single words or phrases
  t: {
    "Get Started": "Почати",
    "View on GitHub": "Переглянути на GitHub",
    "Languages": "Мови",
    "Open Source": "Open Source",
    "Contribute": "Внести свій внесок",
    "Source on GitHub": "Джерело на GitHub",
    "Fork on GitHub": "Форкнути на GitHub",
    "Fork the Website": "Форкнути сайт",
    "Create an Issue": "Створити Issue",
  },
  sidebar: [
    {
      type: "heading",
      text: "Почати",
    },
    {
      type: "link",
      href: "/docs/intro",
      text: "Вступ",
    },
    {
      type: "link",
      href: "/docs/example",
      text: "Приклади",
    },
    {
      type: "link",
      href: "/docs/post_example",
      text: "POST Запити",
    },
    {
      type: "heading",
      text: "Axios API",
    },
    {
      type: "link",
      href: "/docs/api_intro",
      text: "Axios API",
    },
    {
      type: "link",
      href: "/docs/instance",
      text: "Екземпляр Axios",
    },
    {
      type: "link",
      href: "/docs/req_config",
      text: "Конфігурація запиту",
    },
    {
      type: "link",
      href: "/docs/res_schema",
      text: "Схема відповіді",
    },
    {
      type: "link",
      href: "/docs/config_defaults",
      text: "Конфігурація за замовчуванням",
    },
    {
      type: "link",
      href: "/docs/interceptors",
      text: "Перехоплювачі",
    },
    {
      type: "link",
      href: "/docs/handling_errors",
      text: "Обробка помилок",
    },
    {
      type: "link",
      href: "/docs/cancellation",
      text: "Скасування запиту",
    },
    {
      type: "link",
      href: "/docs/urlencoded",
      text: "URL-кодування тіла",
    },
    {
      type: "heading",
      text: "Інше",
    },
    {
      type: "link",
      href: "/docs/notes",
      text: "Замітки",
    },
    {
      type: "heading",
      text: "Контрибьютори",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md",
      text: "Code of Conduct",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/COLLABORATOR_GUIDE.md",
      text: "Посібник для співавторів",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/CONTRIBUTING.md",
      text: "Внесок у Axios"
    },
    {
      type: "link",
      href: "/docs/translating",
      text: "Переклад цієї документації"
    }
  ],
};
