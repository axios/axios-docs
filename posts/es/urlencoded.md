---
title: 'Contenido tipo URL-Encoding'
prev_title: 'Cancelación'
prev_link: '/es/docs/cancellation'
next_title: 'Contenido tipo Multipart'
next_link: '/es/docs/multipart'
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

Alternativamente, puedes codificar data usando la librería [`qs`](https://github.com/ljharb/qs):

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

O de otra forma (ES6),

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

También puedes usar la librería [`qs`](https://github.com/ljharb/qs).

> Nota: Se prefiere usar la librería `qs` si necesitas un stringify de objetos anidados, ya que el método `querystring` tiene problemas conocidos con ese caso de uso (https://github.com/nodejs/node-v0.x-archive/issues/1665).

### 🆕 Serialización Automática

Axios serializará automáticamente el objeto data al formato urlencoded si el contenido de la cabecera `content-type` es `application/x-www-form-urlencoded`.

Esto funciona en el navegador y en `node.js`:

```js
const data = {
  x: 1,
  arr: [1, 2, 3],
  arr2: [1, [2], 3],
  users: [{name: 'Peter', surname: 'Griffin'}, {name: 'Thomas', surname: 'Anderson'}],
};

await axios.post('https://postman-echo.com/post', data,
  {headers: {'content-type': 'application/x-www-form-urlencoded'}}
);
```

El servidor lo manejara como

```js
  {
    x: '1',
    'arr[]': [ '1', '2', '3' ],
    'arr2[0]': '1',
    'arr2[1][0]': '2',
    'arr2[2]': '3',
    'arr3[]': [ '1', '2', '3' ],
    'users[0][name]': 'Peter',
    'users[0][surname]': 'griffin',
    'users[1][name]': 'Thomas',
    'users[1][surname]': 'Anderson'
  }
````

 Si el body parser de tu framework de server soporta la decodificación de objetos anidados (como `body-parser` de `express.js`), 
recibirás automáticamente el mismo objeto server que enviaste.

Ejemplo Echo server (`express.js`) :

```js
  var app = express();
  
  app.use(bodyParser.urlencoded({ extended: true })); // support url-encoded bodies
  
  app.post('/', function (req, res, next) {
     res.send(JSON.stringify(req.body));
  });

  server = app.listen(3000);
```
