---
title: "Corpo con URL-Encoding"
prev_title: "Annullare le Richieste"
prev_link: "/docs/cancellation"
next_title: "Corpo Multipart"
next_link: "/docs/multipart"
---

Per impostazione predefinita, Axios serializza gli oggetti JavaScript in `JSON`.  
Se invece vuoi inviare i dati nel formato `application/x-www-form-urlencoded`, puoi utilizzare uno dei seguenti approcci.

### Browser

In un browser puoi usare l’API [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) nel modo seguente:

```js
const params = new URLSearchParams();
params.append("param1", "value1");
params.append("param2", "value2");

axios.post("/foo", params);
```

> Nota: `URLSearchParams` non è supportato da tutti i browser (vedi [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams)), ma esiste un [polyfill](https://github.com/WebReflection/url-search-params). Assicurati di includerlo a livello globale se devi supportare anche quei browser.

In alternativa puoi codificare i dati usando la libreria [`qs`](https://github.com/ljharb/qs):

```js
const qs = require("qs");
axios.post("/foo", qs.stringify({ bar: 123 }));
```

Oppure, in un altro modo (ES6):

```js
import qs from "qs";
const data = { bar: 123 };
const options = {
  method: "POST",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  data: qs.stringify(data),
  url,
};
axios(options);
```

### Node.js

#### Query string

In Node.js puoi usare il modulo [`querystring`](https://nodejs.org/api/querystring.html) in questo modo:

```js
const querystring = require("querystring");
axios.post("http://something.com/", querystring.stringify({ foo: "bar" }));
```

Oppure puoi usare ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams) dal ['modulo url'](https://nodejs.org/api/url.html):

```js
const url = require("url");
const params = new url.URLSearchParams({ foo: "bar" });
axios.post("http://something.com/", params.toString());
```

Puoi usare anche la libreria [`qs`](https://github.com/ljharb/qs).

> Nota: la libreria `qs` è preferibile se hai bisogno di serializzare oggetti annidati, perché `querystring` ha dei problemi noti con questo tipo di utilizzo (https://github.com/nodejs/node-v0.x-archive/issues/1665).

### 🆕 Serializzazione automatica

Axios può serializzare automaticamente l’oggetto data in formato urlencoded se l’header `content-type` è impostato a `application/x-www-form-urlencoded`.

Questo funziona sia nel browser che in `node.js`:

```js
const data = {
  x: 1,
  arr: [1, 2, 3],
  arr2: [1, [2], 3],
  users: [
    { name: "Peter", surname: "Griffin" },
    { name: "Thomas", surname: "Anderson" },
  ],
};

await axios.post("https://postman-echo.com/post", data, {
  headers: { "content-type": "application/x-www-form-urlencoded" },
});
```

Il server vedrà qualcosa di questo tipo:

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

Se il parser del body del tuo framework server (ad esempio `body-parser` di `express.js`) supporta la decodifica di oggetti annidati, sul server riceverai automaticamente lo stesso oggetto che hai inviato.

Esempio di echo server (`express.js`) :

```js
var app = express();

app.use(bodyParser.urlencoded({ extended: true })); // support url-encoded bodies

app.post("/", function (req, res, next) {
  res.send(JSON.stringify(req.body));
});

server = app.listen(3000);
```
