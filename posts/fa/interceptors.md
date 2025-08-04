---
title: 'رهگیرها'
prev_title: 'تنظیمات پیش فرض'
prev_link: '/fa/docs/config_defaults'
next_title: 'مدیریت خطاها'
next_link: '/fa/docs/handling_errors'
---

درخواست ها یا پاسخ ها را می توانید قبل از اینکه توسط "then" یا "catch" رسیدگی شود ، رهگیری کنید. 

```js
// افزودن یک رهگیر برای درخواست
axios.interceptors.request.use(function (config) {
    // قبل از ارسال درخواست کاری انجام دهید 
    return config;
  }, function (error) {
    // کد مربوط به قسمت خطای درخواست
    return Promise.reject(error);
  });

// افزودن یک رهگیر برای پاسخ
axios.interceptors.response.use(function (response) {
    // هر کد وضعیتی که در محدوده شماره 2xx قرار دارد، باعث فعال شدن این قسمت می شود 
    // با داده های پاسخ کاری انجام دهید
    return response;
  }, function (error) {
    // هر کد وضعیتی که خارج ازمحدوده شماره 2xx باشد، باعث فعال شدن این قسمت می شود 
    // با خطای پاسخ کاری انجام دهید
    return Promise.reject(error);
  });
```

اگر میخواهید بعدا یک رهگیر را حذف کنید:

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

همچنین میتوانید رهگیرها را به نمونه سفارشی سازی شده ی axios اضافه کنید.

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```