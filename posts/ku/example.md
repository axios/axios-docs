---
title: 'نموونەیەکی سادە'
description: 'نموونەیەکی بچووک لە بەکارهێنانی ئەکسیۆس'
prev_title: 'دەستپێکردن'
prev_link: '/ku/docs/intro'
next_title: 'داواکاری POST'
next_link: '/ku/docs/post_example'
---

## تێبینی: بەکارهێنانی CommonJS
بۆ ئەوەی جۆرەکانی TypeScript بەدەستبهێنی (بۆ هەستەوەری زیرەک / تەواوکردنی خۆکارانە) لە کاتی بەکارهێنانی هاوردەکردنەکانی CommonJS بە `require()`، ئەم شێوازەی خوارەوە بەکاربهێنە:

```js
const axios = require('axios').default;

// axios.<method> تەواوکردنی خۆکارانە و جۆرەکانی پارامیتەرەکان دابین دەکات
```

# نموونە

ئەنجامدانی داواکارییەکی `GET`

```js
const axios = require('axios');

// داواکارییەک بنیرە بۆ بەکارهێنەرێک بە ID پدراو
axios.get('/user?ID=12345')
  .then(function (response) {
    // سەرکەوتن چارەسەربکە
    console.log(response);
  })
  .catch(function (error) {
    // هەڵە چارەسەربکە
    console.log(error);
  })
  .finally(function () {
    // هەمووکات جێبەجێدەکرێ
  });

// بەشێوەیەکی هەڵبژاردەیی، داواکارییەکەی سەرەوە ئەکرێت بەم شێوەیەش بکرێت
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // هەمووکات جێبەجێدەکرێت
  });  

// بەکاربهێنی؟ async/await ئەتەوێ
// زیادبکە بۆ فەنکشنەکەت `async` کلیلە ووشەی
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **تێبینی:** `async/await` بەشێکە لە ECMAScript 2017 و لە Internet
> Explorer و وێبگەڕە کۆنەکانی دیکە پشتگیری نەکراوە، بۆیە بە ئاگادارییەوە بەکاری بهێنە.