---
title: 'أكسيوس إي بي أي'
description: 'المرجع لأكسيوس إي بي أي'
prev_title: 'طلبات بوست'
prev_link: 'ar/docs/post_example'
next_title: 'نموذج الأكسيوس'
next_link: 'ar/docs/instance'
---

يمكن للطلبات أن تمرر التي لها صلة بالإعدادات`axios`.

##### axios(config)

```js
// إرسال طلب بوست
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
// طلب غيت لصورة في نود جي إس
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
// إرسال طلب غيت (فونكشن إفتراضي)
axios('/user/12345');
```

### Request method aliases

.قدمت كافة الفونكشن المدهومة لملائمة الاسماء المستعارة

##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])
##### axios.patch(url[, data[, config]])
##### axios.postForm(url[, data[, config]])
##### axios.putForm(url[, data[, config]])
##### axios.patchForm(url[, data[, config]])

###### ملاحظة
When using the alias methods `url`, `method`, and `data` properties don't need to be specified in config.
.`data`و `url`, `method` ليس هنالك حاجة لتوصيف الاسماء المستعارة للفونكشنز عند استخدام
