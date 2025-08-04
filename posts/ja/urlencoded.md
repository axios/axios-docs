---
title: 'URL-エンコードボディ'
prev_title: 'キャンセル'
prev_link: '/ja/docs/cancellation'
next_title: '特記事項'
next_link: '/ja/docs/notes'
---

デフォルトでは、Axios は JavaScript オブジェクトを `JSON` にシリアライズします。代わりに `application/x-www-form-urlencoded` 形式でデータを送信するには、次のいずれかのオプションを使用します。

### ブラウザ

ブラウザでは、以下のように [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) の API を使用できます。

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> なお、`URLSearchParams` はすべてのブラウザでサポートされているわけではありませんが (参照: [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams))、[polyfill](https://github.com/WebReflection/url-search-params) が利用できます (必ずグローバル環境をポリフィルしてください)。

または、以下のように [`qs`](https://github.com/ljharb/qs) ライブラリを使用してデータをエンコードすることもできます。

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

Node.js では、以下のように [`querystring`](https://nodejs.org/api/querystring.html) モジュールを使用することができます。

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

または、['url module'](https://nodejs.org/api/url.html) に定義された ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams) を以下のように使用します。

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

また、[`qs`](https://github.com/ljharb/qs) ライブラリを使用することもできます。

###### 注

ネストしたオブジェクトを文字列化する必要がある場合は、`qs` ライブラリが適しています。なぜなら、 `querystring` メソッドには、その使用例に対して既知の問題があるからです (https://github.com/nodejs/node-v0.x-archive/issues/1665)。

#### フォームデータ

Node.js では、以下のように [`form-data`](https://github.com/form-data/form-data) ライブラリを使用することができます。

```js
const FormData = require('form-data');
 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() })
```

または、以下のようにインターセプターを使用します。

```js
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```