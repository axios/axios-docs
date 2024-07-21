---
title: 'Конфігурація запиту'
prev_title: 'Екземпляр Axios'
prev_link: '/uk/docs/instance'
next_title: 'Схема відповіді'
next_link: '/uk/docs/res_schema'
---


Це доступні параметри конфігурації для подання запитів. Потрібен лише `url`. Запити за замовчуванням становлять `GET`, якщо` method` не вказано.

```js
{
  // `url` - це URL-адреса сервера, яка буде використовуватися для запиту
  url: '/user',

  // `метод` - це метод запиту, який слід використовувати під час подання запиту
  method: 'get', // дефолтне значення

  // `baseURL` буде додаватися до `url`, якщо `url` не є абсолютним.
  // Може бути зручно встановити `baseURL` для екземпляра axios для передачі відносних URL-адрес
  // методам цього екземпляра.
  baseURL: 'https://some-domain.com/api',

  // `transformRequest` дозволяє змінювати дані запиту перед їх надсиланням на сервер
  // Це стосується лише методів запиту "PUT", "POST", "PATCH" та "DELETE"
  // Остання функція в масиві повинна повертати рядок або екземпляр Buffer, ArrayBuffer, FormData або Stream
  // Ви можете змінити об'єкт заголовків.
  transformRequest: [function (data, headers) {
    // Робіть все, що завгодно, щоб перетворити дані

    return data;
  }],

  // `transformResponse` дозволяє вносити зміни до даних відповідей перед їх передачею then/catch
  transformResponse: [function (data) {
    // Робіть все, що завгодно, щоб перетворити дані

    return data;
  }],

  // `заголовки` - це спеціальні заголовки для надсилання
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` - це параметри URL-адреси, які надсилаються разом із запитом
  // Має бути звичайним об’єктом або об’єктом URLSearchParams
  // ПРИМІТКА. Параметри, які є нульовими або невизначеними, не відображаються в URL -адресі.
  params: {
    ID: 12345
  },

  // `paramsSerializer` - це поле для налаштування серіалізації `params`.
  // Ви можете використовувати поле serialize для використання власної функції серіалізації.
  // Ви можете використовувати поле encode для використання власної функції кодування.
  // Якщо ви, як і раніше, задасте функцію в `paramsSerializer`, за замовчуванням функція кодування з axios буде призначена полю encode.
  // (e.g. https://www.npmjs.com/package/qs, https://api.jquery.com/jquery.param/)
  paramsSerializer: {
    serialize: (params) => {
      return Qs.stringify(params, {arrayFormat: 'brackets'})
    },
    encode: (str) => {
      return encodeURIComponent(str)
    }
  },

  // `data` - це дані, які надсилаються як тіло запиту
  // Застосовується лише до методів запиту "PUT", "POST", "DELETE" та "PATCH"
  // Коли параметр `transformRequest` не встановлено, він повинен мати один із таких типів:
  // - рядок, звичайний об'єкт, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Лише для браузера: FormData, File, Blob
  // - Лише для Nodejs: Stream, Buffer
  data: {
    firstName: 'Fred'
  },
  
  // альтернатива синтаксису для надсилання даних у тіло
  // POST метод
  // надсилається лише значення, не ключі
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` визначає кількість мілісекунд до часу очікування запиту.
  // Якщо запит займає більше часу, ніж "час очікування", запит буде скасовано.
  timeout: 1000, // за замовчуванням `0" (без тайм-ауту)

  // `withCredentials` вказує, чи надходять міжсайтові запити контролю доступу
  // повинні бути зроблені з використанням облікових даних
  withCredentials: false, // дефолтне значення

  // `адаптер` дозволяє використовувати користувацьку обробку запитів, що полегшує тестування.
  // Повертає Promise та надає дійсну відповідь (див. Lib/adapters/README.md).
  adapter: function (config) {
    /* ... */
  },

  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  // Please note that only HTTP Basic auth is configurable through this parameter.
  // For Bearer tokens and such, use `Authorization` custom headers instead.

  // `auth` вказує, що слід використовувати HTTP Basic аутентифікацію, і надає облікові дані.
  // Це встановить заголовок `Authorization`, перезаписуючи будь-який існуючий
  // Спеціальні заголовки `Authorization`, які ви встановили за допомогою `headers`.
  // Зверніть увагу, що за допомогою цього параметра можна налаштувати лише авторизацію HTTP Basic.
  // Для токенів Bearer тощо, використовуйте замість цього спеціальні заголовки `Authorization`.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` вказує на тип даних, на які буде відповідати сервер
  // такі параметри: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // тільки для браузеру: 'blob'
  responseType: 'json', // дефолтне значення

  // `responseEncoding` вказує кодування для декодування відповідей (лише для Node.js)
  // Примітка: Ігнорується для `responseType` запитів 'stream' або запитів на стороні клієнта
  responseEncoding: 'utf8', // дефолтне значення

  // `xsrfCookieName` - це ім’я файлу cookie, яке буде використовуватися як значення токену xsrf
  xsrfCookieName: 'XSRF-TOKEN', // дефолтне значення

  // `xsrfHeaderName` - це назва заголовка http, що містить значення токену xsrf
  xsrfHeaderName: 'X-XSRF-TOKEN', // дефолтне значення

  // `onUploadProgress` дозволяє обробляти події прогресу для завантаження
  // тільки для браузеру
  onUploadProgress: function (progressEvent) {
    // Робіть що завгодно з нативною подією прогресу
  },

  // `onDownloadProgress` дозволяє обробляти події прогресу для завантаження
  // тільки для браузеру
  onDownloadProgress: function (progressEvent) {
    // Робіть що завгодно з нативною подією прогресу
  },

  // `maxContentLength` визначає максимальний розмір вмісту відповіді http у байтах, дозволених у node.js
  maxContentLength: 2000,

  // `maxBodyLength` (опція лише для Nodejs) визначає максимальний розмір вмісту запиту http у дозволених байтах
  maxBodyLength: 2000,

  // `validateStatus` визначає, чи потрібно вирішувати чи відхиляти обіцянку для даного коду
  // стану відповіді HTTP. Якщо `validateStatus` повертає` true` (або має значення `null` або` undefined`), 
  // Promise буде `fulfilled`; в іншому випадку Promise буде `rejected`.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // дефолтне значення
  },

  // `maxRedirects` визначає максимальну кількість переспрямувань у node.js.
  // Якщо встановлено значення 0, переспрямування не будуть виконуватися.
  maxRedirects: 5, // дефолтне значення

  // `socketPath` визначає сокет UNIX для використання в node.js.
  // наприклад '/var/run/docker.sock' для надсилання запитів до демону docker.
  // Можна вказати лише `socketPath` або` proxy`.
  // Якщо вказано обидва, використовується `socketPath`.
  socketPath: null, // дефолтне значення

  // `httpAgent` та` httpsAgent` визначають користувацький агент, який буде використовуватися під час виконання http
  // та запити https відповідно до node.js. Це дозволяє додавати такі параметри, як
  // `keepAlive`, які не включені за замовчуванням.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` визначає ім’я хоста, порт та протокол проксі -сервера.
  // Ви також можете визначити свій проксі за допомогою звичайних змінних середовища 
  // `http_proxy` та` https_proxy`. Якщо ви використовуєте змінні середовища для конфігурації 
  // проксі-сервера, ви також можете визначити змінну середовища `no_proxy`
  // як список доменів, розділених комами, які не слід проксірувати.
  // Використовуйте `false`, щоб вимкнути проксі, ігноруючи змінні середовища.
  // `auth` вказує, що для підключення до проксі-сервера слід використовувати базову аутентифікацію HTTP, а також 
  // надає облікові дані.
  // Це встановить заголовок `Proxy-Authorization`, який перезапише будь-які існуючі спеціальні заголовки `Proxy-Authorization`, які ви встановили за допомогою `headers`.
  // Якщо проксі -сервер використовує протокол HTTPS, потрібно встановити протокол на `https`.
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` визначає токен скасування, який можна використати для скасування запиту (див. детальніше у розділі Скасування нижче)
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` вказує, чи слід автоматично розпаковувати тіло відповіді. Якщо встановлено значення `true`, 
  // також буде видалено заголовок "content-encoding" з об'єктів відповідей усіх розпакованих відповідей
  // Лише для Node.js (XHR не може вимкнути декомпресію)
  decompress: true // дефолтне значення

}
```
