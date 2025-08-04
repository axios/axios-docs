---
title: 'Введение'
description: 'HTTP-клиент для браузера и node.js на основе Promise'
next_title: 'Пример'
next_link: '/ru/docs/example'
---

# Что такое Axios?
Axios - это HTTP-клиент, основанный на *[Promise](https://javascript.info/promise-basics)* для [`node.js`](https://nodejs.org) и браузера. Он *[изоморфный](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* (= он может работать в браузере и node.js с той же базой кодов). На стороне сервера он использует нативный node.js `http`-модуль, тогда как на стороне клиента (браузер) он использует XMLHttpRequests.

# Особенности

- Делает [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) запросы из браузера
- Делает [http](http://nodejs.org/api/http.html) запросы из node.js
- Поддерживает [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- Перехватывает запросы и ответы
- Преобразовывает данные запроса и ответа
- Отменяет запросы
- Автоматическое преобразование для JSON-данных
- Поддержка на стороне клиента для защиты от [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

# Установка

Используя npm:

```bash
$ npm install axios
```

Используя bower:

```bash
$ bower install axios
```

Используя yarn:

```bash
$ yarn add axios
```

Используя pnpm:

```bash
$ pnpm add axios
```

Используя jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

Используя unpkg CDN:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```