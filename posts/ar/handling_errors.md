---
title: 'التعامل مع الأخطاء'
prev_title: 'اعتراضات'
prev_link: '/docs/interceptors'
next_title: 'الإلغاء'
next_link: '/docs/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // تم تقديم الطلب واستجاب الخادم برمز الحالة
      // التي تقع خارج نطاق 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // تم تقديم الطلب ولكن لم يتم تلقي أي رد
      // `error.request` هو مثيل لـ XMLHttpRequest في المتصفح ومثيل لـ
      // http.ClientRequest في node.js
      console.log(error.request);
    } else {
      // حدث شيء في إعداد الطلب أدى إلى حدوث خطأ
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

باستخدام خيار التهيئة `validateStatus` ، يمكنك تحديد كود (أكواد) HTTP الذي يجب أن يؤدي إلى حدوث خطأ.

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // قم بالحل فقط إذا كان رمز الحالة أقل من 500
  }
})
```

باستخدام `toJSON` تحصل على كائن بمزيد من المعلومات عن خطأ HTTP.

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```