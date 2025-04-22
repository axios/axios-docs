---
title: 'Codificação de URL'
prev_title: 'Cancelamento'
prev_link: '/ptBR/docs/cancellation'
next_title: 'Multipart'
next_link: '/ptBR/docs/multipart'
---

Por padrão o axios serializa os objetos do JavaScript para `JSON`. Para enviar os dados no formato `application/x-www-form-urlencoded`, você pode usar uma das seguintes opções.

### Navegador

Em um navegador, você pode usar a API [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) da seguinte forma:

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> Note que `URLSearchParams` não é suportado por todos os navegadores (veja [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams)), mas existe um [polyfill](https://github.com/WebReflection/url-search-params) disponível (certifique-se de preencher o polyfill do ambiente global)

Outra alternativa é utilizar a biblioteca [`qs`](https://github.com/ljharb/qs):

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

Ou de outra forma (ES6),

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

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

ou ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams) do ['url module'](https://nodejs.org/api/url.html) assim:

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

Você também pode utilizar a biblioteca [`qs`](https://github.com/ljharb/qs)

> Nota: A biblioteca `qs` é preferível se você precisar restringir objetos aninhados, pois o método `querystring` tem problemas conhecidos como este caso de uso (https://github.com/nodejs/node-v0.x-archive/issues/1665)

### 🆕 Serialização automática

Axios vai serializar os dados automaticamente para o formato *urlencoded* caso o cabeçalho `content-type` esteja definido como `application/x-www-form-urlencoded`.

Isso funciona tanto no navegador quanto no `node.js`:

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

O servidor vai receber os dados assim 

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
```

Se o *parser* do seu framework (como o `body-parser` do `express.js`, por exemplo) suportar a decodificação de objetos aninhados,
você receberá no servidor o mesmo objeto que você submeteu.

Exemplo (`express.js`) :

```js
  var app = express();
  
  app.use(bodyParser.urlencoded({ extended: true })); // suporta objetos codificados
  
  app.post('/', function (req, res, next) {
     res.send(JSON.stringify(req.body));
  });

  server = app.listen(3000);
```
