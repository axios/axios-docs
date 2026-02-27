---
title: 'معالجة الأخطاء'
prev_title: 'المتدخلات'
prev_link: '/ar/docs/interceptors'
next_title: 'الإلغاء'
next_link: '/ar/docs/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // تم إجراء الطلب واستجاب الخادم برمز حالة
      // يقع خارج نطاق 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // تم إجراء الطلب لكن لم يتم تلقي أي استجابة
      // `error.request` هو مثيل XMLHttpRequest في المتصفح ومثيل
      // http.ClientRequest في node.js
      console.log(error.request);
    } else {
      // حدث شيء في إعداد الطلب أثار خطأ
      console.log('خطأ', error.message);
    }
    console.log(error.config);
  });
```

باستخدام خيار التكوين `validateStatus`، يمكنك تحديد رموز HTTP التي يجب أن تثير خطأ.

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // حل فقط إذا كان رمز الحالة أقل من 500
  }
})
```

باستخدام `toJSON` تحصل على كائن يحتوي على مزيد من المعلومات حول خطأ HTTP.

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```