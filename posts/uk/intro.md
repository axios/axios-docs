---
title: 'Починаючи'
description: 'Заснований на Promise HTTP клієнт для браузеру та Nodejs'
next_title: 'Мінімальний приклад'
next_link: '/uk/docs/example'
---

# Що таке Axios?
Axios-це клієнт HTTP на основі *[Promise](https://javascript.info/promise-basics)* для [`node.js`](https://nodejs.org) та браузера. Він *[ізоморфний](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* (= він може працювати у браузері та nodejs з тією ж базою кодів). На стороні сервера він використовує рідний `http`-модуль node.js, тоді як на клієнті (браузер) він використовує `XMLHttpRequests`.

# Переваги

- Робить [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) запити з браузеру
- Робить [http](http://nodejs.org/api/http.html) запити з node.js
- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- Перехопити запит і відповідь
- Перетворення даних запиту та відповіді
- Скасувати запити
- Автоматичне перетворення даних JSON
- Підтримка на стороні клієнта для захисту від [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

# Встановлення

Використовуючи npm:

```bash
$ npm install axios
```

Використовуючи bower:

```bash
$ bower install axios
```

Використовуючи yarn:

```bash
$ yarn add axios
```

Використовуючи pnpm:

```bash
$ pnpm add axios
```

Використовуючи jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

Використовуючи unpkg CDN:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```