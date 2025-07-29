---
title: 'APIهای پروژه Axios'
description: 'مرجع APIهای پروژه Axios'
prev_title: 'درخواست های ارسال'
prev_link: '/docs/post_example'
next_title: 'نمونه سازی از Axios'
next_link: '/docs/instance'
---

با ایجاد پیکربندی مناسب و ارسال به `axios` می توان انواع درخواست ها را انجام داد. 

##### axios(config)

```js
// ارسال درخواستی از نوع POST 
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
// درخواستی از نوع GET برای گرفتن یک عکس از مکانی دیگر در node.js
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
// ارسال درخواستی از نوع GET (متد پیش فرض)
axios('/user/12345');
```

### توابع مختلف یک درخواست

برای راحتی نوشتن کدها، توابعی برای همه روشهای درخواست ارائه شده است.

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

###### نکته
هنگام استفاده از توابع گفته شده، نیازی به نوشتن خود کلمات "url" ، "method" و "data"  در پیکربندی نیست. 
