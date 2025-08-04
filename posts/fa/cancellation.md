---
title: 'لغو درخواست'
prev_title: 'مدیریت خطاها'
prev_link: '/fa/docs/handling_errors'
next_title: 'بدنه های رمزگذاری آدرس (URL-Encoding)'
next_link: '/fa/docs/urlencoded'
---

با یک *توکن لغو* (cancel token) می توانید درخواستی را لغو کنید. 

> API توکن لغو Axios بر اساس "withdrawn " نوشته شده است [پیشنهادی برای پرامیس های قابل لغو](https://github.com/tc39/proposal-cancelable-promises).

مانند روش زیر می توانید با استفاده از `CancelToken.source` یک توکن لغو ایجاد کنید: 

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('درخواست لغو شد', thrown.message);
  } else {
    // مدیریت خطا
  }
});

axios.post('/user/12345', {
  name: 'نام جدید'
}, {
  cancelToken: source.token
})

// لغو درخواست (پارامتر پیام اختیاری است) 
source.cancel('عملیات توسط کاربر لغو شد');
```

همچنین می توانید با ایجاد یک تابع اجرایی که به تابع سازنده کلاس `CancelToken` می دهید، یک توکن لغو ایجاد کنید: 

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // تابع مجری یک متغیر را به عنوان پارامتر دریافت می کند که همان تابع لغو است که در اینجا به متغیری که تعریف کرده ایم، اجراع می دهیم.
    cancel = c;
  })
});

// لغو درخواست
cancel();
```

> Note: you can cancel several requests with the same cancel token.
