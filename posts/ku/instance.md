---
title: 'نموونەیەکی ئەکسیۆس'
prev_title: 'ناوبەستی ئەکسیۆس'
prev_link: '/ku/docs/api_intro'
next_title: 'ڕێکخستنی داواکاری'
next_link: '/ku/docs/req_config'
---

### درووستکردنی نموونەیەک

ئەتوانی نموونەیەکی نوێی ئەکسیۆس دروست بکەیت بە ڕێکخستنێکی کڕیاڕخوازکراو.

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### میثۆدەکانی نموونە

میثۆدەکان کە بەردەستە لە نموونەکە لە خوارەوە دانراوە. ڕێکخستنە دیاریکراوەکە یەک ئەخرێت لەگەڵ ڕێکخستنی نموونەکە.

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])

### بەکاربردنی نموونە بە ڕاستەوخۆییەوە بە ڕێکخستنی کۆنفێگ

لەگەڵ میثۆدەکانی ئاسانەوە وەک `instance.get()` یان `instance.post()`، دەتوانیت نموونەی ئەکسیۆس بە ڕاستەوخۆییەوە بە بەکارهێنانی ئوبجێکتی ڕێکخستن بانگ بکەیت. ئەمە وەک `axios(config)` کاردەکات و بە تایبەتی کاتێک بەدوای هەمان ڕێکخستن داواکارییەک دەخەیتەوە بەسوودە.

```js
const instance = axios.create({ baseURL: '/api' });

// وەک axios(config) کاردەکات
instance({
  url: '/users',
  method: 'get'
});
```

ئەم ڕێگایە ڕێکخستنێکی پاک بۆ دووبارەکردنەوەی داواکاری دابین دەکات، بۆ نموونە لە کاتی چارەسەرکردنی هەڵەی ڕوونکردنەوە:

```js
instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    await refreshToken();
    return instance(error.config); // داواکارییەکە دووبارە بنێرە
  }

  throw error;
});
```