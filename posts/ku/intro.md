---
title: 'دەستپێکردن'
description: 'ڕاژەخوازێکی HTTPـیە لەسەر بنجینەی Promise بۆ وێبگەڕ و نۆد'
next_title: 'نموونەیەکی سادە'
next_link: '/ku/docs/example'
---

# ئەکسیۆس چییە؟
ئەکسیۆس ڕاژەخوازێکی HTTPـیە *[لەسەر Promise بنچینەکراوە](https://javascript.info/promise-basics)* بۆ [`نۆد`](https://nodejs.org) و وێبگەڕ. *[هاوچەشنە](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* (واتا دەتوانێ بە هەمان کۆد لەسەر وێبگەڕ و نۆدیش کاربکات). لەسەر ڕاژە moduleـی ڕەسەنی نۆد `http` بەکاردەهێنێت، لەکاتێکدا لەسەر ڕاژەخواز (وێبگەڕ) XMLHttpRequest بەکاردەهێنێت.

# تایبەتمەندییەکان

- دروستکردنی [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) لەسەر وێبگەڕ
- دروستکردنی داواکاری [http](http://nodejs.org/api/http.html) لە نۆد
- پشتگیری کردنی ناوبەستی  [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- ناوەندگیرکردن لە داواکاری و وەڵامەکان
- گۆڕینی داتای داواکاری و وەڵامەکان
- هەڵوەشاندنەوەی داواکارییەکان
- گۆڕینی خۆکارانە بۆ داتای JSON
- پشتگیری بۆ پاراستن لە دژی [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery) لەسەر ڕاژەخواز

# دامەزراندن

بە npm:

```bash
$ npm install axios
```

بە bower:

```bash
$ bower install axios
```

بە yarn:

```bash
$ yarn add axios
```

بە pnpm:

```bash
$ pnpm add axios
```

بە CDNـی jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

بە CDNـی unpkg:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```