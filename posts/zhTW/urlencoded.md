---
title: 'URL 編碼本體'
prev_title: '取消'
prev_link: '/docs/cancellation'
next_title: '備註'
next_link: '/docs/notes'
---

預設情況下，axios 會將 JavaScript 物件序列化成 `JSON`。若要以 `application/x-www-form-urlencoded` 格式傳送資料，您可以使用下列的選項之一。

### 瀏覽器

在瀏覽器中，您可以使用 [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) API，如下所示：

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> 注意：並非所有瀏覽器都支援 `URLSearchParams` (參見 [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams))，但是有可用的 [polyfill](https://github.com/WebReflection/url-search-params) (請確保您對全域環境進行 polyfill)。

或是您可以使用 [`qs`](https://github.com/ljharb/qs) 函式庫對資料進行編碼：

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

或是另一種方式 (ES6)：

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

在 Node.js，您可以使用 [`querystring`](https://nodejs.org/api/querystring.html) 模組，如下所示：

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

或是 ['url 模組'](https://nodejs.org/api/url.html)中的 ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams)，如下所示：

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

您也可以使用 [`qs`](https://github.com/ljharb/qs) 函式庫。

###### 提醒

由於 `querystring` 方法有已知問題 (https://github.com/nodejs/node-v0.x-archive/issues/1665)，故若您需要將巢狀物件轉為字串，請優先使用 `qs` 函式庫。

#### Form data

在 Node.js，您可以使用 [`form-data`](https://github.com/form-data/form-data) 函式庫，如下所示：

```js
const FormData = require('form-data');
 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() })
```

或是使用攔截器：

```js
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```