---
title: 'أجسام URL-Encoded'
prev_title: 'الإلغاء'
prev_link: '/ar/docs/cancellation'
next_title: 'ملاحظات'
next_link: '/ar/docs/notes'
---

افتراضيًا، يسلسل axios كائنات JavaScript إلى `JSON`. لإرسال البيانات بتنسيق `application/x-www-form-urlencoded` بدلاً من ذلك، يمكنك استخدام أحد الخيارات التالية.

### المتصفح

في المتصفح، يمكنك استخدام API [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) كالتالي:

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> لاحظ أن `URLSearchParams` غير مدعوم من قبل جميع المتصفحات (انظر [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams))، لكن هناك [polyfill](https://github.com/WebReflection/url-search-params) متاح (تأكد من polyfill البيئة العامة).

بدلاً من ذلك، يمكنك ترميز البيانات باستخدام مكتبة [`qs`](https://github.com/ljharb/qs):

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

أو بطريقة أخرى (ES6)،

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

#### سلسلة الاستعلام

في node.js، يمكنك استخدام وحدة [`querystring`](https://nodejs.org/api/querystring.html) كالتالي:

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

أو ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams) من ['وحدة url'](https://nodejs.org/api/url.html) كالتالي:

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

يمكنك أيضًا استخدام مكتبة [`qs`](https://github.com/ljharb/qs).

###### ملاحظة
مكتبة `qs` مفضلة إذا كنت بحاجة إلى تحويل كائنات متداخلة إلى سلاسل، حيث أن طريقة `querystring` لديها مشاكل معروفة مع حالة الاستخدام هذه (https://github.com/nodejs/node-v0.x-archive/issues/1665).

#### بيانات النموذج

في node.js، يمكنك استخدام مكتبة [`form-data`](https://github.com/form-data/form-data) كالتالي:

```js
const FormData = require('form-data');
 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() })
```

بدلاً من ذلك، استخدم متدخل:

```js
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```