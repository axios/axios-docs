---
title: 'هيئات تشفير عناوين URL'
prev_title: 'الإلغاء'
prev_link: '/docs/cancellation'
next_title: 'ملاحظات'
next_link: '/docs/notes'
---

بشكل افتراضي ، تسلسل axios كائنات JavaScript إلى `JSON`. لإرسال بيانات بتنسيق `application/x-www-form-urlencoded` بدلاً من ذلك ، يمكنك استخدام أحد الخيارات التالية.

### المتصفح

في المتصفح, يمكنك استخدام واجهة برمجة تطبيق [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) كالتالي:

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> لاحظ أن `URLSearchParams` غير مدعوم من قبل جميع المتصفحات (أنظر [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams)), ولكن هناك [polyfill](https://github.com/WebReflection/url-search-params) متاح (تأكد من تنفيذ polyfill للبيئة ككل).

بدلاً من ذلك ، يمكنك تشفير البيانات باستخدام مكتبة [`qs`](https://github.com/ljharb/qs):

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

### مكتبة Node.js

#### نص الاستعلام

في node.js ، يمكنك استخدام الوحدة النمطية [`querystring`](https://nodejs.org/api/querystring.html) على النحو التالي:

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

أو ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams) من ['url module'](https://nodejs.org/api/url.html) كالتالي:

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

يمكنك أيضًا استخدام مكتبة [`qs`](https://github.com/ljharb/qs).

###### ملاحظة
تُفضل مكتبة `qs` إذا كنت بحاجة إلى سلسلة من الكائنات المتداخلة ، حيث إن أسلوب`querystring` لديه مشكلات معروفة في حالة الاستخدام هذه (https://github.com/nodejs/node-v0.x-archive/issues/1665).

#### بيانات الاستمارة

في node.js ، يمكنك استخدام مكتبة [`form-data`](https://github.com/form-data/form-data) على النحو التالي:

```js
const FormData = require('form-data');
 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() })
```

بدلا من ذلك ، استخدم معترض:

```js
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```