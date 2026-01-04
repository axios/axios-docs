---
title: 'المتدخلات'
prev_title: 'الإعدادات الافتراضية'
prev_link: '/ar/docs/config_defaults'
next_title: 'معالجة الأخطاء'
next_link: '/ar/docs/handling_errors'
---

يمكنك اعتراض الطلبات أو الاستجابات قبل أن يتم التعامل معها بواسطة `then` أو `catch`.

```js
// إضافة متدخل طلب
axios.interceptors.request.use(function (config) {
    // افعل شيئًا قبل إرسال الطلب
    return config;
  }, function (error) {
    // افعل شيئًا مع خطأ الطلب
    return Promise.reject(error);
  });

// إضافة متدخل استجابة
axios.interceptors.response.use(function (response) {
    // أي رمز حالة يقع ضمن نطاق 2xx يسبب تشغيل هذه الدالة
    // افعل شيئًا مع بيانات الاستجابة
    return response;
  }, function (error) {
    // أي رموز حالة تقع خارج نطاق 2xx تسبب تشغيل هذه الدالة
    // افعل شيئًا مع خطأ الاستجابة
    return Promise.reject(error);
  });
```

إذا كنت بحاجة إلى إزالة متدخل لاحقًا يمكنك ذلك.

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

يمكنك إضافة متدخلات إلى نموذج مخصص من axios.

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```