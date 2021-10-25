---
title: 'یک مثال کوچک'
description: 'یک مثال کوچک در استفاده از axios'
prev_title: 'مقدمه'
prev_link: '/docs/intro'
next_title: 'درخواست های ارسال از نوع POST'
next_link: '/docs/post_example'
---

## نکته: استفاده از کد معمول
برای استفاده از قابلیت های (intellisense / autocomplete) در TypeScript، حین استفاده از «require» به صورت زیر استفاده کنید: 

```js
const axios = require('axios').default;

// حالا با تایپ axios.<method> لیست توابع این کتابخانه نمایش داده می شود
```

# مثال

انجام درخواست `GET` 

```js
const axios = require('axios');

// ایجاد درخواست برای یک کاربر با آی دی مشخص
axios.get('/user?ID=12345')
  .then(function (response) {
    // مدیریت پاسخ در زمان موفق بودن درخواست
    console.log(response);
  })
  .catch(function (error) {
    // مدیریت خطا
    console.log(error);
  })
  .then(function () {
    // این قسمت همیشه اجرا می شود
  });

// درخواست بالا را به صورت زیر هم میتوان نوشت
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
  .then(function () {
    // این قسمت همیشه اجرا می شود
  });  

// اگر میخواهید از async/await? استفاده کنید، کلمه `async` را در ابتدای تعریف تابع اضافه کنید.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **نکته:** `async/await` جزوی از روش ECMAScript 2017 است و در اینترنت اکسپلورر یا همان IE و مرورگرهای قدیمی پشتیبانی نمی شود.
> پس با احتیاط لازم استفاده کنید.