---
title: 'URL-エンコードボディ'
prev_title: 'キャンセル'
prev_link: '/ja/docs/cancellation'
next_title: 'マルチパートボディ'
next_link: '/ja/docs/multipart'
---

デフォルトでは、Axios は JavaScript オブジェクトを `JSON` にシリアライズします。代わりに `application/x-www-form-urlencoded` 形式でデータを送信するには、次のいずれかのオプションを使用します。

### ブラウザ

ブラウザでは、以下のように [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) の API を使用できます:

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> なお、`URLSearchParams` はすべてのブラウザでサポートされているわけではありませんが (参照: [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams))、[polyfill](https://github.com/WebReflection/url-search-params) が利用できます (必ずグローバル環境をポリフィルしてください)。

または、以下のように [`qs`](https://github.com/ljharb/qs) ライブラリを使用してデータをエンコードすることもできます:

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

あるいは別の方法 (ES6) でも。

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

#### クエリ文字列

Node.js では、以下のように [`querystring`](https://nodejs.org/api/querystring.html) モジュールを使用することができます:

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

または、['url module'](https://nodejs.org/api/url.html) に定義された ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams) を以下のように使用します:

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

また、[`qs`](https://github.com/ljharb/qs) ライブラリを使用することもできます。

> 注: ネストしたオブジェクトを文字列化する必要がある場合は、`qs` ライブラリの使用適しています。`querystring` メソッドには、その使用例に関する既知の問題があるからです (https://github.com/nodejs/node-v0.x-archive/issues/1665)。

### 🆕 自動シリアライゼーション

Axios は、`content-type` ヘッダーが `application/x-www-form-urlencoded` に設定されている場合、データオブジェクトを自動的に urlencoded 形式にシリアライズします。

これは、ブラウザと `Node.js` の両方で動作します:

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

サーバーはそれを次のように処理します

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

サーバーフレームワークのリクエストボディパーサー（`express.js` の `body-parser` など）がネストしたオブジェクトのデコードをサポートしている場合、
送信したものと同じサーバーオブジェクトが自動的に受信されます。

エコーサーバーの例（`express.js`） :

```js
  var app = express();
  
  app.use(bodyParser.urlencoded({ extended: true })); // URL-エンコードボディをサポート
  
  app.post('/', function (req, res, next) {
     res.send(JSON.stringify(req.body));
  });

  server = app.listen(3000);
```
