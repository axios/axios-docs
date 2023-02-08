---
title: 'اعتراضات'
prev_title: 'الإعدادات الافتراضية للتكوين'
prev_link: '/docs/config_defaults'
next_title: 'التعامل مع الأخطاء'
next_link: '/docs/handling_errors'
---

يمكنك اعتراض الطلبات أو الاستجابات قبل معالجتها بواسطة `then` أو `catch`.

```js
// إضافة طلب اعتراض
axios.interceptors.request.use(function (config) {
    // افعل شيئًا قبل أن يتم إرسال الطلب
    return config;
  }, function (error) {
    // افعل شيئا مع خطأ الطلب
    return Promise.reject(error);
  });

// إضافة معترض استجابة
axios.interceptors.response.use(function (response) {
    // يتسبب أي رمز حالة يقع في نطاق 2xx في تشغيل هذه الوظيفة
    // افعل شيئًا ما باستخدام بيانات الاستجابة
    return response;
  }, function (error) {
    // تتسبب أي رموز حالة تقع خارج نطاق 2xx في تشغيل هذه الوظيفة
    // افعل شيئًا مع وجود خطأ في الاستجابة
    return Promise.reject(error);
  });
```

إذا احتجت إلى إزالة معترض لاحقًا ، يمكنك ذلك.

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

يمكنك إضافة اعتراضات إلى مثيل مخصص من Axios.

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```