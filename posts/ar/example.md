---
title: 'مثال مبسط'
description: 'مثال صغير على استخدام Axios'
prev_title: 'مقدمة'
prev_link: '/docs/intro'
next_title: 'طلبات POST'
next_link: '/docs/post_example'
---

## ملاحظة: استخدام جافا سكريبت الشائعة
من أجل الحصول على أنواع TypeScript (التحسس الذكي / إكمال تلقائي) اثناء استخدام حملة الاستراد في جافاسكريبت الشائعة بـ `require()` استخدم النهج التالي:

```js
const axios = require('axios').default;

// axios.<method> سيوفر الآن الإكمال التلقائي وأنواع المعلمات
```

# مثال

تنفيذ طلب `GET`

```js
const axios = require('axios');

// تقديم طلب لمستخدم بمعرف معين
axios.get('/user?ID=12345')
  .then(function (response) {
    // التعامل مع البيانات المستقبلة
    console.log(response);
  })
  .catch(function (error) {
    // التعامل مع الاخطاء
    console.log(error);
  })
  .then(function () {
    // يتم تنفيذها دائما
  });

// اختياريًا ، يمكن أيضًا تنفيذ الطلب أعلاه على شكل التالي
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // يتم تنفيذها دائما
  });  

// تريد استخدام async/await?
// أضف الكلمة المفتاحية `async` إلي function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **ملاحظة:** يكون `async/await` جزءاً من ECMAScript 2017 وهو غير مدعوم في الإنترنت.
> مثل متصفح المستكشف الخاص بمايكرو سوفت والمتصفحات القديمة الاخر، لذا استخدمها بحذرز