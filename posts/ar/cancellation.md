---
title: 'الإلغاء'
prev_title: 'معالجة الأخطاء'
prev_link: '/ar/docs/handling_errors'
next_title: 'أجسام URL-Encoded'
next_link: '/ar/docs/urlencoded'
---

## AbortController

بدءًا من `v0.22.0` يدعم Axios [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) لإلغاء الطلبات بطريقة fetch API:

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

## CancelToken `مهمل`

يمكنك أيضًا إلغاء طلب باستخدام *CancelToken*.

> API رمز الإلغاء في axios مبني على [اقتراح الوعود القابلة للإلغاء المسحوب](https://github.com/tc39/proposal-cancelable-promises).

> هذا API مهمل منذ `v0.22.0` ولا يجب استخدامه في المشاريع الجديدة

يمكنك إنشاء رمز إلغاء باستخدام مصنع `CancelToken.source` كما هو موضح أدناه:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('تم إلغاء الطلب', thrown.message);
  } else {
    // معالجة الخطأ
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// إلغاء الطلب (معامل الرسالة اختياري)
source.cancel('تم إلغاء العملية من قبل المستخدم.');
```

يمكنك أيضًا إنشاء رمز إلغاء بتمرير دالة تنفيذ إلى مُنشئ `CancelToken`:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // تتلقى دالة التنفيذ دالة إلغاء كمعامل
    cancel = c;
  })
});

// إلغاء الطلب
cancel();
```

> ملاحظة: يمكنك إلغاء عدة طلبات بنفس رمز الإلغاء / الإشارة.

خلال فترة الانتقال، يمكنك استخدام كلا API الإلغاء، حتى لنفس الطلب:

```js
const controller = new AbortController();

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token,
  signal: controller.signal
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('تم إلغاء الطلب', thrown.message);
  } else {
    // معالجة الخطأ
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// إلغاء الطلب (معامل الرسالة اختياري)
source.cancel('تم إلغاء العملية من قبل المستخدم.');
// أو
controller.abort(); // معامل الرسالة غير مدعوم
```
