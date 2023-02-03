---
title: 'URL-Encoding Bodies'
prev_title: 'Cancellation'
prev_link: '/docs/cancellation'
next_title: 'Multipart Bodies'
next_link: '/docs/multipart'
---

By default, axios serializes JavaScript objects to `JSON`. To send data in the `application/x-www-form-urlencoded` format instead, you can use one of the following approaches.

### Browser

In a browser, you can use the [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) API as follows:

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> Note that `URLSearchParams` is not supported by all browsers (see [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams)), but there is a [polyfill](https://github.com/WebReflection/url-search-params) available (make sure to polyfill the global environment).

Alternatively, you can encode data using the [`qs`](https://github.com/ljharb/qs) library:

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

Or in another way (ES6),

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

In node.js, you can use the [`querystring`](https://nodejs.org/api/querystring.html) module as follows:

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

or ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams) from ['url module'](https://nodejs.org/api/url.html) as follows:

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

You can also use the [`qs`](https://github.com/ljharb/qs) library.

> Note: The `qs` library is preferable if you need to stringify nested objects, as the `querystring` method has known issues with that use case (https://github.com/nodejs/node-v0.x-archive/issues/1665).

### 🆕 Automatic serialization

Axios will automatically serialize the data object to urlencoded format if the `content-type` header is set to `application/x-www-form-urlencoded`.

This works both in the browser and in `node.js`:

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

The server will handle it as 

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

If your server framework's request body parser (like `body-parser` of `express.js`) supports nested objects decoding, 
you will automatically receive the same server object that you submitted.

Echo server example (`express.js`) :

```js
  var app = express();
  
  app.use(bodyParser.urlencoded({ extended: true })); // support url-encoded bodies
  
  app.post('/', function (req, res, next) {
     res.send(JSON.stringify(req.body));
  });

  server = app.listen(3000);
```
