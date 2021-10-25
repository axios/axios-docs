---
title: 'نمونه سازی از Axios'
prev_title: 'APIهای پروژه Axios'
prev_link: '/docs/api_intro'
next_title: 'پیکربندی درخواست ها'
next_link: '/docs/req_config'
---

### ایجاد یک نمونه

می توانید نمونه جدیدی از axios را با یک پیکربندی سفارشی نمونه سازی و ایجاد کنید.

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### توابه این نمونه

توابع مربوط به نمونه ساخته شده در زیر ذکر شده است. پیکربندی مشخص شده با پیکربندی پیش فرض نمونه ادغام می شود. 

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])