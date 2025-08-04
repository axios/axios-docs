---
title: 'URL-кодирующие параметры'
prev_title: 'Отмена запросов'
prev_link: '/ru/docs/cancellation'
next_title: 'Примечания'
next_link: '/ru/docs/notes'
---

По умолчанию `axios` сериализует объекты JavaScript в `JSON`. Чтобы отправить данные в формате `application/x-www-form-urlencoded`, вы можете использовать один из следующих вариантов.

### Браузер

В браузере вы можете использовать [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) API следующим образом:

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> Обратите внимание, что `URLSearchParams` поддерживается не всеми браузерами (см. [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams)), но вы можете воспользоваться [полифилом](https://github.com/WebReflection/url-search-params) (убедитесь, что вы используете полифил в глобальной среде).

Кроме того, вы можете кодировать данные с помощью библиотеки [`qs`](https://github.com/ljharb/qs):

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

Или по-другому (ES6),

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

В node.js вы можете использовать модуль [`querystring`](https://nodejs.org/api/querystring.html) следующим образом:

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

или ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams) из ['url module'](https://nodejs.org/api/url.html) следующим образом:

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

Вы также можете воспользоваться библиотекой [`qs`](https://github.com/ljharb/qs).

###### Примечание
Библиотека `qs` предпочтительнее, если вам нужно преобразовать вложенные объекты в строки, поскольку метод `querystring` имеет известные проблемы с этим вариантом использования. (https://github.com/nodejs/node-v0.x-archive/issues/1665).

#### Form data

В node.js вы можете использовать библиотеку [`form-data`](https://github.com/form-data/form-data) следующим образом:

```js
const FormData = require('form-data');
 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() })
```

В качестве альтернативы используйте перехватчик:

```js
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```