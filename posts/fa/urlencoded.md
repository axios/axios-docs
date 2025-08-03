---
title: 'بدنه های رمزگذاری آدرس (URL-Encoding)'
prev_title: 'لغو درخواست'
prev_link: '/fa/docs/cancellation'
next_title: 'نکات'
next_link: '/fa/docs/notes'
---

به صورت پیش فرض ، axios اشیاء JavaScript را به `JSON` تبدیل می کند. برای ارسال داده در قالب `application/x-www-form-urlencoded` ، می توانید از یکی از گزینه های زیر استفاده کنید.

### مرورگر

در مرورگر، میتوانید از تابع API [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) به صورت زیر استفاده کنید:

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> توجه داشته باشید که `URLSearchParams` توسط همه ی مرورگر ها پشتیبانی نمی شود (لینک [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams) را ببینید) ، اما میتوانید از امکانات پکیج [url-search-params](https://github.com/WebReflection/url-search-params) بهره ببرید (مطمئن شوید که آن را به صورت سراسری تعریف میکنید).

روش دیگر ، می توانید داده ها را با استفاده از کتابخانه [`qs`](https://github.com/ljharb/qs) رمزگذاری کنید:

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

یا به روشی دیگر (ES6),

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

#### رشته پرس و جو

در node.js، میتوانید از ماژول [`querystring`](https://nodejs.org/api/querystring.html) به صورت زیر استفاده کنید:

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

یا ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams) از ['ماژول url'](https://nodejs.org/api/url.html) به صورت زیر:

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

همچنین میتوانید از کتابخانه [`qs`](https://github.com/ljharb/qs) استفاده کنید.

###### نکته
برای استفاده از اشیاء تودرتو کتابخانه `qs` پیشنهاد می شود چرا که متد `querystring` مشکلاتی دارد (https://github.com/nodejs/node-v0.x-archive/issues/1665).

#### Form data

در node.js ، میتوانید از کتابخانه [`form-data`](https://github.com/form-data/form-data) به صورت زیر استفاده کنید:

```js
const FormData = require('form-data');
 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() })
```

در روشی دیگر ، از رهگیر استفاده کنید:

```js
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```