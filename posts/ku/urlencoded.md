---
title: "URL-Encoding Bodies"
prev_title: "هەڵوەشاندنەوە"
prev_link: "/ku/docs/cancellation"
next_title: "تێبینییەکان"
next_link: "/ku/docs/notes"
---

بەشێوەیەکی بنەڕەت، ئەکسیۆس ئۆبجێکتەکانی جاڤاسکریپت serialize ئەکات بۆ `JSON`. بۆ ناردنی داتا بە شێوەی `application/x-www-form-urlencoded`، ئەتوانی یەکێک لە بژاردانەی خوارەوە بەکاربهێنی.

### وێبگەڕ

لە وێبگەڕدا، ئەتوانی ناوبەندی [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) بەکاربهێنیت وەک ئەمەی خوارەوە:

```js
const params = new URLSearchParams();
params.append("param1", "value1");
params.append("param2", "value2");
axios.post("/foo", params);
```

> تێبینی ئەوە بکە `URLSearchParams` لە هەموو وێبگەڕەکان پشتگیری نەکراوە (بڕوانە [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams))، بەڵام [polyfill](https://github.com/WebReflection/url-search-params)ـێک بەردەستە (دڵنایبەرەوە لە polyfill کردنی ژینگە گشتییەکە).

لە جیاتی ئەوە، ئەتوانی داتاکە encode بکەیت بەبەکارهێنانی کتێبخانەی [`qs`](https://github.com/ljharb/qs):

```js
const qs = require("qs");
axios.post("/foo", qs.stringify({ bar: 123 }));
```

یان بە ڕێگایەکی دیکە (ES6)،

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

### نۆد

#### کتێبخانەی Query string

لە نۆددا، ئەتوانی [`querystring`](https://nodejs.org/api/querystring.html) module بەکاربهێنیت بەم شێوازەی خوارەوە:

```js
const querystring = require("querystring");
axios.post("http://something.com/", querystring.stringify({ foo: "bar" }));
```

یان ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams) لە ['url module'](https://nodejs.org/api/url.html)ـەوە بەم شێوەیەی خوارەوە:

```js
const url = require("url");
const params = new url.URLSearchParams({ foo: "bar" });
axios.post("http://something.com/", params.toString());
```

هەروەها ئەتوانی کتێبخانەی [`qs`](https://github.com/ljharb/qs) بەکاربهێنیت.

###### تێبینی

کتێبخانەی `qs` پەسندترە ئەگەر ئەتەوێ stringifyـی ئۆبجێکتیێکی قوڵ بکەیت، چونکە شێوازی `querystring` چەند کێشەیەکی دیاری هەیە بۆ ئەم بەکارهێنانە(<https://github.com/nodejs/node-v0.x-archive/issues/1665>)

#### شێوازی Form data

لە نۆددا، ئەتوانی کتێبخانەی [`form-data`](https://github.com/form-data/form-data) بەکاربهێنیت بەم شێوازەی خوارەوە:

```js
const FormData = require("form-data");

const form = new FormData();
form.append("my_field", "my value");
form.append("my_buffer", new Buffer(10));
form.append("my_file", fs.createReadStream("/foo/bar.jpg"));

axios.post("https://example.com", form, { headers: form.getHeaders() });
```

لەجیاتی ئەوە، ئەتوانی ناوەندگیرێک بەکاربهێنیت:

```js
axios.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```
