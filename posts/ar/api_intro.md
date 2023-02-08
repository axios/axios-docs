---
title: 'واجهة برمجة التطبيقات Axios'
description: 'مرجع واجهة برمجة التطبيقات Axios'
prev_title: 'طلبات POST'
prev_link: '/docs/post_example'
next_title: 'مثيل Axios'
next_link: '/docs/instance'
---

يمكن تقديم الطلبات بتمرير التكوين ذي الصلة إلى `Axios`.

##### axios(config)

```js
// إرسال طلب POST
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

```js
// طلب GET لصورة علي الانترنت في node.js
axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });
```

##### axios(url[, config])

```js
// إرسال طلب GET (الطريقة الافتراضية)
axios('/user/12345');
```

### ألاسماء المستعارة لطريقة الطلب

لتسهيل الأمر، تم توفير الأسماء المستعارة لجميع طرق الطلب المعتمدة.

##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])
##### axios.patch(url[, data[, config]])

###### ملاحظة
عند استخدام طرق الاسم المستعار `url` أو  `method` أو `data` لا يلزم تحديد الخصائص في التكوين.
