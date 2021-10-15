---
title: 'ناوبەستی ئەکسیۆس'
description: 'سەرچاوەکەی ناوبەستی ئەکسیۆس'
prev_title: 'داواکاری POST'
prev_link: '/ku/docs/post_example'
next_title: 'نموونەیەکی ئەکسیۆس'
next_link: '/ku/docs/instance'
---

ئەتوانرێت داواکارییەکان ئەنجام بدرێت بە ناردنی ڕێکخستنە پەیوەندیدارەکان بۆ `axios`.

##### axios(config)

```js
// بنێرە POST داواکارییەکی
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

```js
// بۆ وێنەیەکی دوور لە نۆددا GET داواکارییەکی
axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });
```

##### axios(url[, config])

```js
// بنێرە (میثۆدی بنەڕەت) GET داواکارییەکی
axios('/user/12345');
```

### ناوی خوازراوی میثۆدەکان

بۆ ئاسانیی بەکارهێنان ناوی خوازراو دابین کراوە بۆ هەموو میثۆدە پشتگیریکراوەکان.


##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])
##### axios.patch(url[, data[, config]])

###### تێبینی

لە کاتی بەکارهێنانی میثۆدەکان بە ناوە خوازراوەکانیان `url`، `method` و `data` پێویست ناکا دیاری بکرێت لە configـەکەیا.