---
title: 'URL-Encoder le contenu d’une requête'
prev_title: 'Annuler une requête'
prev_link: '/fr/docs/cancellation'
next_title: 'Notes'
next_link: '/fr/docs/notes'
---

Par défaut, Axios serialise les objets JavaScript en `JSON`. Pour plutôt envoyer les données au format `application/x-www-form-urlencoded`, vous pouvez utiliser l’une des options suivantes.

### Dans le navigateur

Dans le navigateur, vous pouvez utiliser l’API [`URLSearchParams`](https://developer.mozilla.org/fr/docs/Web/API/URLSearchParams) comme ceci :

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> **Note :** `URLSearchParams` n’est pas supporté par tous les navigateurs (voir [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams)), mais un [polyfill](https://github.com/WebReflection/url-search-params) est disponible (prenez soin de polyfiller l’environnement global).

Autrement, vous pouvez encoder les données avec la librairie [`qs`](https://github.com/ljharb/qs) :

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

Ou sinon (ES6),

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

### Avec node.js

#### querystring

Avec node.js, vous pouvez utiliser le [module `querystring`](https://nodejs.org/api/querystring.html) comme ceci :

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

ou bien le constructeur [`URLSearchParams`](https://nodejs.org/api/url.html#url_class_urlsearchparams) du [module `url`](https://nodejs.org/api/url.html) comme ceci :

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

Vous pouvez également utiliser la librairie [`qs`](https://github.com/ljharb/qs).

> **Note :** la librairie `qs` est préférable si vous devez stringifier des objets imbriqués, car la méthode `querystring` est [connue pour causer des problèmes dans ce cas-là](https://github.com/nodejs/node-v0.x-archive/issues/1665).

#### form-data

Avec node.js, vous pouvez utiliser la librairie [`form-data`](https://github.com/form-data/form-data) comme ceci :

```js
const FormData = require('form-data');
 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() })
```

Autrement, vous pouvez utiliser un intercepteur :

```js
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```