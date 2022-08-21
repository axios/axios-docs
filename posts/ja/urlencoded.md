---
title: 'URLエンコードのボディ'
prev_title: 'キャンセル'
prev_link: '/ja/docs/cancellation'
next_title: '注記'
next_link: '/ja/docs/notes'
---

デフォルトでは、 axios は JavaScript のオブジェクトを `JSON` 形式でシリアライズします。代わりに `application/x-www-form-urlencoded` 形式でデータを送信するには、次のいずれかのオプションを使用します:

### ブラウザ

ブラウザでは、以下のように [`URLSearchParams`](https://developer.mozilla.org/ja/docs/Web/API/URLSearchParams) のAPIを利用することができます:

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> なお、 `URLSearchParams` はすべてのブラウザでサポートされているわけではありませんが ([caniuse.com](http://www.caniuse.com/#feat=urlsearchparams) 参照) 、 [polyfill](https://github.com/WebReflection/url-search-params) が用意されています (グローバル環境では必ず polyfill を適用してください) 。

また、 [`qs`](https://github.com/ljharb/qs) ライブラリを使用してデータをエンコードすることもできます:

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

あるいは別の方法 (ES6) でも:

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

node.js では、以下のように [`querystring`](https://nodejs.org/api/querystring.html) モジュールを利用することができます:

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

もしくは ['url module'](https://nodejs.org/api/url.html) の ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams) を以下のように使用することもできます:

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

また、 [`qs`](https://github.com/ljharb/qs) ライブラリも使用できます。

###### 注
ネストしたオブジェクトを文字列化する必要がある場合は、 `qs` ライブラリを使用するのが望ましいです。 `querystring` メソッドには、その使用例に関する既知の問題があるからです (https://github.com/nodejs/node-v0.x-archive/issues/1665) 。

#### Form data

node.js では、以下のように [`form-data`](https://github.com/form-data/form-data) ライブラリを利用することができます:

```js
const FormData = require('form-data');

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() })
```

または、インターセプタを使用します:

```js
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```