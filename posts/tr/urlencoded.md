---
title: 'URL-Encoding Gövdeleri'
prev_title: 'İptal etme'
prev_link: '/docs/cancellation'
next_title: 'Notlar'
next_link: '/docs/notes'
---

Axios, varsayılan olarak JavaScript objelerini `JSON`a dizileştirir (serialize eder). Bunun yerine `application/x-www-form-urlencoded` formatı ile veri göndermek için, aşağıdaki seçeneklerden birini kullanabilirsiniz.

### Tarayıcı

Tarayıcı ortamında [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) API'sini aşağıdakine benzer şekilde kullanabilirsiniz:

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> Unutmayın ki `URLSearchParams` bazı tarayıcılar tarafından desteklenmemektedir. (bkz [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams)), ancak bunun için bir [çoklu dolgu (polyfill)](https://github.com/WebReflection/url-search-params) mevcut (global ortamı çoklu dolgulamayı unutmayın).

Alternatif olarak, veriyi [`qs`](https://github.com/ljharb/qs) kütüphanesi ile encode edebilirsiniz:

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

Veya başka bir şekilde (ES6),

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

#### Sorgu dizesi

Node.js'de, [`querystring`](https://nodejs.org/api/querystring.html) modülünü aşağıdaki gibi kullanabilirsiniz:

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

veya ['url modülü'](https://nodejs.org/api/url.html)'nden ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams) aşağıdaki gibi kullanılabilir:

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

Ayrıca [`qs`](https://github.com/ljharb/qs) kütüphanesini de kullanabilirsiniz.

###### NOT
`querystring` metotunun bu kullanım durumuyla ilgili bilinen sorunları olduğundan (https://github.com/nodejs/node-v0.x-archive/issues/1665), iç içe nesneleri dizileştirmeniz (serialize etmeniz) gerekiyorsa `qs` kitaplığı tercih edilebilir.

#### Form verisi

Node.js'de [`form-data`](https://github.com/form-data/form-data) kütüphanesini aşağıdaki gibi kullanabilirsiniz.

```js
const FormData = require('form-data');

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() })
```

Alternatif olarak, bir interceptor da kullanabilirsiniz:

```js
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```
