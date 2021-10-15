---
title: 'URL-кодування тіла'
prev_title: 'Скасування запиту'
prev_link: '/uk/docs/cancellation'
next_title: 'Замітки'
next_link: '/uk/docs/notes'
---

За замовчуванням axios серіалізує об’єкти JavaScript у `JSON`. Натомість для надсилання даних у форматі `application/x-www-form-urlencoded` можна скористатися одним із наведених нижче варіантів.

### Браузер

У Браузер ви можете використовувати API [`URLSearchParams`] (https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) наступним чином:

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> Зауважте, що `URLSearchParams` підтримується не всіма браузерами (див. [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams)), але доступний [поліфіл](https://github.com/WebReflection/url-search-params) (переконайтеся, що ви використовуете поліфіл в глобальному середовищі).

Крім того, ви можете кодувати дані за допомогою бібліотеки [`qs`](https://github.com/ljharb/qs)

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

Або по-іншому (ES6),

```js
import qs from 'qs';
const data = { 'bar': 123 };
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url,
};
axios(options);
```

### Node.js

#### Query string

У node.js ви можете використовувати модуль [`querystring`](https://nodejs.org/api/querystring.html) наступним чином:

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

або [`URLSearchParams`](https://nodejs.org/api/url.html#url_class_urlsearchparams) з [`url module`](https://nodejs.org/api/url.html) наступним чином:

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

Ви також можете скористатися бібліотекою [`qs`](https://github.com/ljharb/qs).

###### ПРИМІТКА
Бібліотека `qs` є кращою, якщо вам потрібно стригувати вкладені об’єкти, оскільки метод `querystring` має [відомі проблеми з цим варіантом використання](https://github.com/nodejs/node-v0.x-archive/issues/1665).

#### Form data

У node.js ви можете використовувати бібліотеку [`form-data`](https://github.com/form-data/form-data) наступним чином:

```js
const FormData = require('form-data');
 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() })
```

Або використовуйте перехоплювач:

```js
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```