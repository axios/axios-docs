---
title: 'شروع به کار'
description: 'سرویس گیرنده HTTP مبتنی بر پرامیس (Promise) برای مرورگر و node.js'
next_title: 'مثالی کوچک'
next_link: '/docs/example'
---

# Axios چیست؟
Axios یک سرویس گیرنده *[promise-based](https://javascript.info/promise-basics)* برای [`node.js`](https://nodejs.org) و مرورگر است.  همچنین یک *[isomorphic](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* است. (= می‌تواند با کدی یکسان هم در مرورگر و هم در nodejs اجرا شود).  در سمت سرور از کد ماژول بومی `http` node.js استفاده میکند در حالی که سمت مرورگر از XMLHttpRequests استفاده میکند.

# ویژگی ها

- ایجاد درخواست [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) از طریق مرورگر
- ایجاد درخواست های [http](http://nodejs.org/api/http.html) از طریق node.js
- پشتیبانی از [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- رهگیری درخواست و یا پاسخ آن
- تغییر داده های درخواست و پاسخ
- لغو کردن درخواست ها
- تبدیل خودکار داده های JSON
- پشتیبانی از کاربر علیه حملات [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

# نحوه نصب

با استفاده از npm:

```bash
$ npm install axios
```

با استفاده از bower:

```bash
$ bower install axios
```

با استفاده از yarn:

```bash
$ yarn add axios
```

با استفاده از jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

با استفاده از unpkg CDN:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
