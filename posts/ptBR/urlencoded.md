---
title: 'Corpo de codificação de URL'
prev_title: 'Cancelamento'
prev_link: '/docs/ptBR/cancellation'
next_title: 'Notas'
next_link: '/docs/ptBR/notes'
---

Por padrão axios serializa os objetos do JavaScript para `JSON`. Para enviar dados no formato `application/x-www-form-urlencoded`, você pode usar uma das seguintes opções.
<!--By default, axios serializes JavaScript objects to `JSON`. To send data in the `application/x-www-form-urlencoded` format instead, you can use one of the following options.-->

### Browser

Em um navegador, você pode usar a API [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) da seguinte forma:
<!--In a browser, you can use the [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) API as follows:-->

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> Note que `URLSearchParams` não é suportado por todos os navegadores (veja [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams)), mas existe um [polyfill](https://github.com/WebReflection/url-search-params) disponível (certifique-se de preencher o polyfill do ambiente global)
<!--> Note that `URLSearchParams` is not supported by all browsers (see [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams)), but there is a [polyfill](https://github.com/WebReflection/url-search-params) available (make sure to polyfill the global environment).-->

Você também pode codificar os dados usando a biblioteca [`qs`](https://github.com/ljharb/qs):
<!--Alternatively, you can encode data using the [`qs`](https://github.com/ljharb/qs) library:-->

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

Ou de outra forma (ES6),
<!--Or in another way (ES6),-->

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

No node.js, você pode usar o modulo [`querystring`](https://nodejs.org/api/querystring.html) da seguinte forma:
<!--In node.js, you can use the [`querystring`](https://nodejs.org/api/querystring.html) module as follows:-->

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

ou ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams) de ['url module'](https://nodejs.org/api/url.html) da seguinte forma:
<!--or ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams) from ['url module'](https://nodejs.org/api/url.html) as follows:-->

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

Você também pode usar a biblioteca [`qs`](https://github.com/ljharb/qs)
<!--You can also use the [`qs`](https://github.com/ljharb/qs) library.-->

###### NOTE
A biblioteca `qs` é preferível se você precisar restringir objetos aninhados, pois o método `querystring` tem problemas conhecidos como este caso de uso (https://github.com/nodejs/node-v0.x-archive/issues/1665)
<!--The `qs` library is preferable if you need to stringify nested objects, as the `querystring` method has known issues with that use case (https://github.com/nodejs/node-v0.x-archive/issues/1665).-->

#### Form data

No node.js, você pode usar a biblioteca [`form-data`](https://github.com/form-data/form-data) da seguinte forma:
<!--In node.js, you can use the [`form-data`](https://github.com/form-data/form-data) library as follows:-->

```js
const FormData = require('form-data');
 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() })
```

Alternativamente, use um interceptador:
<!--Alternatively, use an interceptor:-->

```js
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```