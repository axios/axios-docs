---
title: 'بدء'
description: "وعد علي أساس عميل HTTP يستند إلى المتصفح و node.js"
next_title: 'مثال مبسط'
next_link: '/docs/example'
---

# ماذا يكون Axios؟
المحاور او Axios هو عميل HTTP *[يستند إالي الوعد](https://javascript.info/promise-basics)* لـ node.js والمتصفح. إنه *[متماثل](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* (= يمكن تشغيله في المتصفح و nodejs بنفس قاعدة الكود). على جانب الخادم ، يستخدم الوحدة النمطية node.js `http` الأصلية ، بينما يستخدم العميل (المتصفح) طلبات XMLHttpRequests.

# الميزات

- قم بإجراء طلبات [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) من المتصفح
- قم بإجراء طلبات [http](http://nodejs.org/api/http.html) من node.js
- يدعم واجهة برمجة التطبيقات [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- اعتراض الطلب والاستجابة
- تحويل بيانات الطلب والأستجابة
- إلغاء الطلبات
- تحويلات تلقائية للبيانات لتنسيق JSON
- يدعم جانب المتصفح بالحماية ضد [تزوير الطلب عبر المواقع
](https://ar.wikipedia.org/wiki/%D8%AA%D8%B2%D9%88%D9%8A%D8%B1_%D8%A7%D9%84%D8%B7%D9%84%D8%A8_%D8%B9%D8%A8%D8%B1_%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9)

# التنزيل 

بأستخدام npm:

```bash
$ npm install axios
```

بأستخدام bower:

```bash
$ bower install axios
```

بأستخدام yarn:

```bash
$ yarn add axios
```

بأستخدام شبكة توصيل المحتوى jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

بأستخدام شبكة توصيل المحتوى unpkg:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```