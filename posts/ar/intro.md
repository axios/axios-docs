---
title: 'البدء'
description: 'عميل HTTP مبني على الوعود للمتصفح و node.js'
next_title: 'مثال بسيط'
next_link: '/ar/docs/example'
---

# ما هو Axios؟
Axios هو عميل HTTP يعتمد على *[الوعود ](https://javascript.info/promise-basics)* [`Nodejs`](https://nodejs.org)لكل من  المتصفح  و
.
  
وهو *[متجانس (Isomorphic)](https://www.lullabot.com/articles/what-is-an-isomorphic-application)*، أي يمكن تشغيله في المتصفح وNode.js باستخدام نفس قاعدة الشيفرة.

على جهة الخادم يستخدم وحدة `http` الأصلية في Node.js، بينما على جهة العميل (المتصفح) يستخدم `XMLHttpRequest`.

# الميزات

- إجراء [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) من المتصفح
- إجراء طلبات [http](http://nodejs.org/api/http.html) من node.js
- يدعم [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- اعتراض الطلب والاستجابة
- تحويل بيانات الطلب والاستجابة
- إلغاء الطلبات
- تحويلات تلقائية لبيانات JSON
- دعم جانب العميل لحماية من [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

# التثبيت

استخدام npm:

```bash
$ npm install axios
```

استخدام bower:

```bash
$ bower install axios
```

استخدام yarn:

```bash
$ yarn add axios
```

استخدام pnpm:

```bash
$ pnpm add axios
```

استخدام jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

استخدام unpkg CDN:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```