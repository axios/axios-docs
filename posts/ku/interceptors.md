---
title: 'ناوەندگیرەکان'
prev_title: 'بنەڕەتەکانی ڕێکخستن'
prev_link: '/ku/docs/config_defaults'
next_title: 'چارەسەرکردنی هەڵەکان'
next_link: '/ku/docs/handling_errors'
---

ئەتوانیت داواکاری یان وەڵامەکان بگریت پێش ئەوەی چارەسەر بکرێن بە `then` یان `cathc`.

```js
// ناوەندگیری داواکاریەک زیادبکە
axios.interceptors.request.use(function (config) {
    // شتێک بکە پێش ئەوەی داواکارییەکە بنێردرێ
    return config;
  }, function (error) {
    // شتێک بکە لەگەڵ هەڵەی داواکارییەکە
    return Promise.reject(error);
  });

// ناوەندگیری وەڵامێک زیاد بکە
axios.interceptors.response.use(function (response) {
    // هەر کۆدی دۆخێک کە لە مەودای 200 دابێت ئەبێتە هۆی بەکارخستنی ئەم فەنکشنە
    // شتێک بکە لە داتای وەڵامەکە
    return response;
  }, function (error) {
    // هەر کۆدی دۆخێک کە لە دەرەوەی مەودوای 200 بێت ئەبێتە هۆی بەکارخستنی ئەم فەنکشنە
    // شتێک بکە لە هەڵەی وەڵامەکە
    return Promise.reject(error);
  });
```

ئەتوانی لە دواتردا هەر ناوەندگیرێک لاببەیت ئەگەر ویستت.

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

ئەتوانی ناوەندگیر زیادبکەیت بۆ نموونەیەکی کڕیاڕخوازکراوی ئەکسیۆس.

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```