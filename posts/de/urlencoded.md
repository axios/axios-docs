---
title: 'URL-Ähnlich Kodierte Anfragenkörper'
prev_title: 'Anfragen Abbrechen'
prev_link: '/de/docs/cancellation'
next_title: 'Weitere Notizen'
next_link: '/de/docs/notes'
---

Normalerweise serialisiert Axios JavaScript-Objekte zu `JSON`. Um Daten stattdessen im Format `application/x-www-form-urlencoded` zu senden, können die folgenden Methoden verwendet werden:

### Browser

In einem Browser kann die [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)-API wie folgt verwendet werden:

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> `URLSearchParams` wird nicht von allen Browsern unterstützt (siehe [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams)), aber es gibt ein [Polyfill](https://github.com/WebReflection/url-search-params).

Als Alternative können Daten mit dem Modul [`qs`](https://github.com/ljharb/qs) verarbeitet werden:

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

Oder auch so: *(ES6)*

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

In Node.js kann das Modul [`querystring`](https://nodejs.org/api/querystring.html) verwendet werden:

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

oder [`URLSearchParams`](https://nodejs.org/api/url.html#url_class_urlsearchparams) aus dem Modul [`url`](https://nodejs.org/api/url.html):

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

Das Modul [`qs`](https://github.com/ljharb/qs) funktioniert ebenso.

###### Hinweis
Um verschachtelte Objekte senden zu können ist das Modul `qs` die bessere Wahl, da das Modul `querystring` bekanntlich Probleme mit solchen Fällen hat (https://github.com/nodejs/node-v0.x-archive/issues/1665).

#### Formulardaten

In Node.js funktioniert auch das Module [`form-data`](https://github.com/form-data/form-data):

```js
const FormData = require('form-data');
 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() })
```

Alternativ kann auch ein Abfänger verwendet werden.

```js
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```
