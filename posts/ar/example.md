---
title: 'مثال بسيط'
description: 'مثال صغير على استخدام axios'
prev_title: 'المقدمة'
prev_link: '/ar/docs/intro'
next_title: 'طلبات POST'
next_link: '/ar/docs/post_example'
---

## ملاحظة: استخدام CommonJS
للحصول على كتابات TypeScript (للإكمال التلقائي / التلميح) أثناء استخدام استيرادات CommonJS مع `require()` استخدم النهج التالي:

```js
const axios = require('axios').default;

// axios.<method> will now provide autocomplete and parameter typings
```

# مثال

إجراء طلب `GET`

```js
const axios = require('axios');

// إجراء طلب لمستخدم بمعرف معين
axios.get('/user?ID=12345')
  .then(function (response) {
    // معالجة النجاح
    console.log(response);
  })
  .catch(function (error) {
    // معالجة الخطأ
    console.log(error);
  })
  .then(function () {
    // يتم تنفيذه دائمًا
  });

// بدلاً من ذلك، يمكن أن يكون الطلب أعلاه كالتالي
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
    // يتم تنفيذه دائمًا
  });  

// تريد استخدام async/await؟ أضف كلمة `async` إلى الدالة الخارجية/الطريقة.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **ملاحظة:** `async/await` جزء من ECMAScript 2017 ولا يتم دعمه في Internet
> Explorer والمتصفحات القديمة، لذا استخدم بحذر.