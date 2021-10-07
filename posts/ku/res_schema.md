---
title: "شێوازی وەڵام"
prev_title: "ڕێکخستنی داواکاری"
prev_link: "/ku/docs/req_config"
next_title: "بنەڕەتەکانی ڕێکخستن"
next_link: "/ku/docs/config_defaults"
---

وەڵامەکە بۆ داواکارییەک ئەم زانیارییانەی خوارەوەی تێدایە.

```js
{
  // ئەو وەڵامەیە کە ڕاژە دابینی کردووە `data`
  data: {},

  // ـە کە لە وەڵامی ڕاژەوە دێتHTTP کۆدی دۆخی `status`
  status: 200,

  // ـە کە لە وەڵامی ڕاژەوە دێتHTTP نامەی دۆخی `statusText`
  statusText: 'OK',

  // ـە کە ڕاژە وەڵامی پێداوەتەوەHTTP هێدەرەکانی `headers`
  // bracket notation ناوی هەموو هێدەرکان بە پیتی بچوک نووسراون و دەتوانیت پێیان بگەیت بە شێوازی
  // `response.headers['content-type']` :نموونە
  headers: {},

  // لە داواکارییەکەدا `axios` ئەو ڕێکخستنەیە کە دابینکراوە بۆ `config`
  config: {},

  // ئەو داواکارییەیە کە دروست کراوە لەم وەڵامەوە `request`
  //ـە لە نۆددا (لە ئاڕاستەکردەکانەوە)ClientRequest کۆتا نموونەی
  // ـە لە وێبگەڕداXMLHttpRequest نموونەیەکی
  request: {}
}
```

لە کاتی بەکارهێنانی `then`، وەڵامەکە بەم شێوەیەی خوارەوە وەردەگریتەوە:

```js
axios.get("/user/12345").then(function (response) {
  console.log(response.data);
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers);
  console.log(response.config);
});
```

لە کاتی بەکارهێنانی `catch`، یان ناردنی [rejection callback](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)ـێک وەک پاڕامیتەری دووەمی `then`، ئەوە وەڵامەکە بەردەست ئەبێت لە نێو ئۆبجێکتی `error`ـەکە وەک ڕوونکراوەتەوە لە بەشی [Handling Errors](/docs/handling_errors).
