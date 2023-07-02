---
title: 'Cuerpos de solicitud codificados como URL'
prev_title: 'Cancelación'
prev_link: '/es/docs/cancellation'
next_title: 'Notas'
next_link: '/es/docs/notes'
---

Por defecto, axios serializa objetos JavaScript a `JSON`. Para enviar data en un formato distinto a `application/x-www-form-urlencoded`, puedes usar una de las siguientes opciones.

### Navegador

En un navegador, puedes usar el API [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) de la siguiente manera:

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> Nota que `URLSearchParams` no es soportado por todos los navegadores (ver [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams)), pero hay un [polyfill](https://github.com/WebReflection/url-search-params) disponible (asegurate de usar polyfill en el ambiente global).

Alternativamente, puedes codificar data usando la biblioteca [`qs`](https://github.com/ljharb/qs):

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

O de otra manera (ES6),

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

En node.js, puedes usar el modulo [`querystring`](https://nodejs.org/api/querystring.html) de la siguiente manera:

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

O ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams) del ['modulo url'](https://nodejs.org/api/url.html) de esta manera:

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

También puedes usar la biblioteca [`qs`](https://github.com/ljharb/qs).

###### NOTA
La biblioteca `qs` es preferida si necesitas un stringify de objetos anidados, ya que el método `querystring` tiene problemas conocidos con ese caso de uso (https://github.com/nodejs/node-v0.x-archive/issues/1665).

#### Form data

En node.js, puedes usar la biblioteca [`form-data`](https://github.com/form-data/form-data) de la siguiente manera:

```js
const FormData = require('form-data');
 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() })
```

Alternativamente, usa un interceptor:

```js
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```