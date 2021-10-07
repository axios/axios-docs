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