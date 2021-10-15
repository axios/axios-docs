---
title: 'هەڵوەشاندنەوە'
prev_title: 'چارەسەرکردنی هەڵەکان'
prev_link: '/ku/docs/handling_errors'
next_title: 'URL-Encoding Bodies'
next_link: '/ku/docs/urlencoded'
---

ئەتوانیت داواکارییەک هەڵبوەشێنیتەوە بە بەکارهێنانی *cancel token*.


> ناوبەندی cancel tokenـی ئەکسیۆس دروست کراوە لەسەر بنەمای [cancelable promises proposal](https://github.com/tc39/proposal-cancelable-promises) کە لە ئێستادا هەڵپەسێردراوە.

ئەتوانی cancel tokenـێک دروست بکەی بە بەکارهێنانی کارگەی `CancelToken.source` وەک لە خوارەوە پێشاندراوە:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // هەڵە چارەسەربکە
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// (بژاردەییە message پاڕامیتەری) داواکارییەکە هەڵبوەشێنەرەوە
source.cancel('Operation canceled by the user.');
```

ئەتوانی cancel tokenـێک دروست بکەیت بە ناردنی فەنکشنێکی جێبەجێکار executor بۆ `CancelToken` constructor.

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // وەک پاڕامیتەر وەردەگرێت cancel فەنکشنێکی هەڵوەشاندنەوە executor فەنکشنێکی جێبەجێکار
    cancel = c;
  })
});

// داواکارییەکە هەڵبوەشێنەرەوە
cancel();
```

> تێبینی: ئەتوانی چەند دانە داواکارییەک بە هەمان cancel token هەڵبوەشێنیتەوە.
