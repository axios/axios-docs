---
title: 'نکات'
description: 'چند نکته ای دیگر برای جمع بندی'
prev_title: 'بدنه های رمزگذاری آدرس (URL-Encoding)'
prev_link: '/fa/docs/urlencoded'
---

## ورژن دهی

تا زمان رسیدن ورژن axios به نسخه `1.0`، تغییرات ساختاری با یک شماره ورژن به اصطلاح minor ارائه میشود. برای مثال ورژن `0.5.1` و `0.5.4` از توابع API یکسان استفاده میکنند. اما ورژن `0.6.0` تغییراتی ساختاری دارد.

## Promise ها

axios به پیاده سازی بومی Promise  در ES6 بستگی دارد تا [پشتیبانی شود](http://caniuse.com/promises).
اگر محیط شما از Promise های در ES6 پشتیبانی نمی کند، می توانید از [polyfill](https://github.com/jakearchibald/es6-promise) استفاده کنید.

## TypeScript
axios شامل تعاریف [TypeScript](http://typescriptlang.org) می شود.
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## منابع

* [تغییرات](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [راهنمای ارتقاء](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [زیست بوم](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [راهنمای مشارکت برنامه نویسان](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [قوانین رفتاری](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## Credits

axios بشدت از [سرویس $http](https://docs.angularjs.org/api/ng/service/$http) ارائه شده در [Angular](https://angularjs.org/) الهام گرفته شده است. در نهایت axios تلاشی، برای ارائه خدمات مستقل `$http` برای استفاده خارج از Angular است. 

## مجوز استفاده

[MIT](https://github.com/axios/axios/blob/master/LICENSE)