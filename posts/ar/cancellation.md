---
title: 'الإلغاء'
prev_title: 'التعامل مع الأخطاء'
prev_link: '/docs/handling_errors'
next_title: 'هيئات تشفير عناوين URL'
next_link: '/docs/urlencoded'
---

## AbortController

بدءًا من `v0.22.0` تم دعم [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) لإلغاء الطلبات بطريقة إحضار API:

```js
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// إلغاء الطلب
controller.abort()
```

## CancelToken `موقوف`

يمكنك أيضًا إلغاء طلب باستخدام  *CancelToken*. 

> تستند واجهة برمجة التطبيقات لإلغاء الرمز المميز بـ Axios على [اقتراح الوعود القابلة للإلغاء](https://github.com/tc39/proposal-cancelable-promises) التي تم سحبها.

> تم إيقاف واجهة برمجة التطبيقات هذه منذ `v0.22.0` ويجب عدم استخدامها في المشاريع الجديدة

يمكنك إنشاء رمز إلغاء باستخدام معمل "CancelToken.source" كما هو موضح أدناه:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // تعامل مع الخطأ
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// إلغاء الطلب (معامل الرسالة اختياري)
source.cancel('Operation canceled by the user.');
```

يمكنك أيضًا إنشاء رمز إلغاء مميز بتمرير وظيفة المنفذ إلى مُنشئ `CancelToken`:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // وظيفة المنفذ تتلقى وظيفة إلغاء كمعامل
    cancel = c;
  })
});

// إلغاء الطلب
cancel();
```

> ملاحظة: يمكنك إلغاء عدة طلبات بنفس رمز الإلغاء / الإشارة.

خلال الفترة الانتقالية، يمكنك استخدام واجهات برمجة تطبيقات للإلغاء، حتى لنفس الطلب:

```js
const controller = new AbortController();

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token,
  signal: controller.signal
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // تعامل مع الخطأ
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// إلغاء الطلب (معامل الرسالة اختياري)
source.cancel('Operation canceled by the user.');
// أو
controller.abort(); // معامل الرسالة غير مدعوم
```
