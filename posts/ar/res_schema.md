---
title: 'مخطط الاستجابة'
prev_title: 'تكوين طلب'
prev_link: '/docs/req_config'
next_title: 'الإعدادات الافتراضية للتكوين'
next_link: '/docs/config_defaults'
---

تحتوي الاستجابة لطلب يحتوي على المعلومات التالية.

```js
{
  // `data` هي الاستجابة التي قدمها الخادم
  data: {},

  // `status` هو رمز حالة HTTP من استجابة الخادم
  status: 200,

  // `statusText` هو رمز حالة HTTP من استجابة الخادم
  // اعتبارًا من HTTP/2، يكون نص حالة النص فارغًا أو غير مدعوم.
  // (طلب للحصول على تعليقات HTTP/2: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)
  statusText: 'OK',

  // `headers` رؤوس HTTP التي استجاب لها الخادم
  // جميع أسماء الرؤوس صغيرة ويمكن الوصول إليها باستخدام تدوين الأقواس (bracket notation).
  // مثال: `response.headers['content-type']`
  headers: {},

  // `config` هو التكوين الذي تم توفيره لـ `axios` للطلب
  config: {},

  // `request` هو الطلب الذي ولد هذه الاستجابة
  // إنه آخر مثيل ClientRequest في node.js (في عمليات إعادة التوجيه) ومثيل XMLHttpRequest في المتصفح
  request: {}
}
```

عند استخدام `then` ، ستتلقى الرد على النحو التالي:

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

عند استخدام `catch`، او تمرير [رد اتصال الرفض](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) كمعامل ثاني لـ `then` ، ستتوفر الاستجابة من خلال كائن `error` كما هو موضح في قسم [التعامل مع الأخطاء](/docs/handling_errors).
