---
title: 'مدیریت خطاها'
prev_title: 'رهگیرها'
prev_link: '/fa/docs/interceptors'
next_title: 'لغو درخواست ها'
next_link: '/fa/docs/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // درخواست انجام شده است و سرور با یک کد وضعیت پاسخ داده است
      // که از محدوده کد با شماره 2xx خارج است
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // درخواست انجام شد اما پاسخی دریافت نشد 
      // `error.request` نمونه ای از XMLHttpRequest در مرورگر است
      // و همینطور نمونه ای از http.ClientRequest در node.js است 
      console.log(error.request);
    } else {
      // در تنظیم درخواست مشکلی پیش آمده که باعث ایجاد خطا شد
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

با استفاده از گزینه validateStatus ، می توانید کد (های) HTTP را که باید خطا ایجاد کنند ، تعریف کنید.  

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // فقط اگر کد وضعیت کمتر از 500 باشد مقدار true است
  }
})
```

با استفاده از تابع `toJSON` می توانید یک شی با اطلاعات بیشتر در مورد خطای HTTP دریافت می کنید.

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```