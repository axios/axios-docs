---
title: 'بنەڕەتەکانی ڕێکخستن'
prev_title: 'شێوازی وەڵامەکان'
prev_link: '/ku/docs/res_schema'
next_title: 'ناوەندگیرەکان'
next_link: '/ku/docs/interceptors'
---

## بنەڕەتەکانی ڕێکخستن

ئەتوانی بنەڕەتەکانی ڕێکخستن دیاری بکەیت کە جێبەجێ ئەبێتە سەر هەموو داواکارییەک.

### بنەڕەتە گشتییەکانی ئەکسیۆس


```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### بنەڕەتە ڕاژەخوازکراوەکانی نموونەیەک

```js
// بنەڕەتەکانی ڕێکخستنەکە دابنێ لە کاتی دروستکردنی نموونەیەک
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// بنەڕەتەکان بگۆڕە پاش دروست کردنی نموونەکە
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### ڕیزبەندی پێشینەیی ڕێکخستن

ڕێکخستن یەکئەخرێ بەپێی ڕیزبەندی پێشەکی. ڕیزبەندییەکە بنەڕەتەکانی کتێبخانەکە پێش ئەخات کە دەدۆزرێتەوە لە [lib/defaults.js](https://github.com/axios/axios/blob/master/lib/defaults.js#L28)، پاشان تایبەتمەندی `defaults` لەسەر نموونەکە، وە لە کۆتاییدا پاڕامیتەر `config` کە بۆ داواکارییەکە ئەنێردرێت. ئەوەی دواتر دێت ڕیزبەندییەکەی پێشدەکەوێت بەسەر ئەوەی کە لە پێشتردا هاتووە. ئەمە نموونەیەکە:

```js
// نموونەیەک دروست بکە بە ڕێکخستنە بنەڕەتییەکان کە کتێبخانەکە بەردەستی کردوون
// نرخی `0`ـە وەک هاتووە لە بنەڕەتەکانی کتێبخانەکە timeout لەم کاتەدا ڕێکخستنی
const instance = axios.create();

// بگۆڕە بەسەر بنەڕەتی کتێبخانەکەدا timeout نرخی
// بن timing out ئێستا هەموو داواکارییەکان بەم نموونەیە 2.5 چرکە چاوەڕێ دەکەن پێش ئەوەی
instance.defaults.timeout = 2500;

// بگۆڕە بۆ ئەم داواکارییە چونکە ئەزانین کاتێکی زۆرتر ئەخایەنێت timeout نرخی
instance.get('/longRequest', {
  timeout: 5000
});
```
