---
title: 'URL-Encoding Bodies'
prev_title: '取消請求'
prev_link: '/zhTW/docs/cancellation'
next_title: '注意事項'
next_link: '/zhTW/docs/notes'
---

Axios 預設會將 JavaScript object 序列化（serialize）成 `JSON`，如需以 `application/x-www-form-urlencoded` 格式傳送資料，請參考以下的方法。

### 瀏覽器

在瀏覽器中，您可以使用 [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) API，參考範例：

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> 注意：並非所有瀏覽器都支援 `URLSearchParams`，具體支援情況請參閱 [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams)。若您的目標瀏覽器不支援這項 API，也有[替代方案](https://github.com/WebReflection/url-search-params)可供使用。

或者您也可以用 [`qs`](https://github.com/ljharb/qs) 函式庫來編碼資料。

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

如果在 ES6，也可以這樣：

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

在 Node.js 中，您可以使用 [`querystring`](https://nodejs.org/api/querystring.html) 模組，參考範例：

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

或者使用 [url 模組](https://nodejs.org/api/url.html)提供的 [URLSearchParams](https://nodejs.org/api/url.html#url_class_urlsearchparams)，參考範例：

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

您也可以使用 [`qs`](https://github.com/ljharb/qs) 函式庫。

###### 使用須知

如果您需要 stringify 巢狀的物件，請使用 `qs` 函式庫，因為 `querystring` 在這種用途會有些[問題](https://github.com/nodejs/node-v0.x-archive/issues/1665)。

#### Form data

在 Node.js 中，您可以使用 [`form-data`](https://github.com/form-data/form-data) 函式庫，參考範例：

```js
const FormData = require('form-data');
 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() })
```

另一種方式是使用 interceptor

```js
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```