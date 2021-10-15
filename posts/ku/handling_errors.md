---
title: 'چارەسەرکردنی هەڵەکان'
prev_title: 'ناوەندگیرەکان'
prev_link: '/ku/docs/interceptors'
next_title: 'هەڵوەشاندنەوە'
next_link: '/ku/docs/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // داواکارییەکە نێردراوە و ڕاژە وەڵامی داوەتەوە بە کۆدە دۆخێک
      // کە ئەکەوێتە دەرەوەی مەودای 200
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // داواکارییەکە نێردراوە بەڵام هیچ وەڵامێک وەرنەگیراوە
      // ـە لە وێبگەڕدا وXMLHttpRequest نموونەیەکی `error.request`
      // ـە لە نۆدداhttp.ClientRequest نموونەیەکی
      console.log(error.request);
    } else {
      // شتێک ڕوویدا لە دامەزراندنی داواکارییەکەدا کە بووە هۆی ئەم هەڵەیە
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

بە بەکارهێنانی بژاردەی ڕێکخستنی `validateStatus`، ئەو کۆدانەی HTTP دیاری بکەیت کە ئەبنە هۆی ڕوودانی هەڵە.

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // ئەبێت تەنها ئەگەر کۆدی دۆخەکە کەمتربێ لە 500 Resolve
  }
})
```

بە بەکارهێنانی `toJSON` ئۆبجێکتێکت دەست ئەکەوێ کە زانیاری زیاتری تێدایە دەربارەی هەڵەیHTTPـەکە.

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```