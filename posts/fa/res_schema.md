---
title: 'الگوی پاسخ ها'
prev_title: 'پیکربندی درخواست ها'
prev_link: '/docs/req_config'
next_title: 'تنظیمات پیش فرض'
next_link: '/docs/config_defaults'
---

اطلاعات پاسخ برای یک درخواست شامل اطلاعات زیر است:

```js
{
  // `data` پاسخی است که توسط سرور ارائه شده است
  data: {},

  // `status` کد وضعیت HTTP از پاسخ سرور است
  status: 200,

  // `statusText` پیام وضعیت HTTP از پاسخ سرور است 
  statusText: 'OK',

  // `headers` شامل هدرهایی است که سرور پاسخ داده است
  // این هدرها حروف کوچک هستند و با استفاده از براکت می توان به آنها دسترسی پیدا کرد. 
  // مثال: `response.headers['content-type']`
  headers: {},

  // `config` شامل تنظیماتی است که توسط `axios` برای درخواست ارائه شده است
  config: {},

  // `request` همان درخواستی است که این پاسخ را ایجاد کرده است 
  // در node.js آخرین نمونه از ClientRequest است
  // و در مرورگر نمونه ای از XMLHttpRequest است
  request: {}
}
```

هنگام استفاده از "then"، پاسخ را به شرح زیر دریافت خواهید کرد: 

```js
axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

هنگام استفاده از `catch`, یا استفاده از [rejection callback](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) به عنوان پارامتر دوم `then`, مقدار پاسخ در شیء `error` قابل دسترسی است که در [مدیریت خطاها](/docs/handling_errors) توضیح داده شده است.