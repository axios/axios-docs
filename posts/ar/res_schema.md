---
title: 'مخطط الاستجابة'
prev_title: 'تكوين الطلب'
prev_link: '/ar/docs/req_config'
next_title: 'الإعدادات الافتراضية'
next_link: '/ar/docs/config_defaults'
---

الاستجابة لطلب تحتوي على المعلومات التالية.

```js
{
  // `data` هي الاستجابة التي قدمها الخادم
  data: {},

  // `status` هو رمز حالة HTTP من استجابة الخادم
  status: 200,

  // `statusText` هو رسالة حالة HTTP من استجابة الخادم
  // اعتبارًا من HTTP/2، نص الحالة فارغ أو غير مدعوم.
  // (HTTP/2 RFC: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)
  statusText: 'OK',

  // `headers` هي رؤوس HTTP التي رد بها الخادم
  // جميع أسماء الرؤوس تكون بأحرف صغيرة ويمكن الوصول إليها باستخدام تدوين الأقواس.
  // مثال: `response.headers['content-type']`
  headers: {},

  // `config` هو التكوين الذي تم تقديمه إلى `axios` للطلب
  config: {},

  // `request` هو الطلب الذي أنتج هذه الاستجابة
  // هو آخر مثيل ClientRequest في node.js (في عمليات إعادة التوجيه)
  // ومثيل XMLHttpRequest في المتصفح
  request: {}
}
```

عند استخدام `then`، ستتلقى الاستجابة كالتالي:

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

عند استخدام `catch`، أو تمرير [callback رفض](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) كمعامل ثاني لـ `then`، ستكون الاستجابة متاحة من خلال كائن `error` كما هو موضح في قسم [معالجة الأخطاء](/docs/handling_errors).
