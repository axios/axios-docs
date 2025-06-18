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

### فراخوانی مستقیم نمونه با شیء پیکربندی

علاوه بر متدهای کمکی مانند `instance.get()` یا `instance.post()`، می‌توانید یک نمونه Axios را مستقیماً با یک شیء پیکربندی فراخوانی کنید. این کار دقیقاً مانند `axios(config)` عمل می‌کند و زمانی مفید است که بخواهید یک درخواست را با پیکربندی اولیه دوباره ارسال کنید.

```js
const instance = axios.create({ baseURL: '/api' });

// مشابه axios(config) عمل می‌کند
instance({
  url: '/users',
  method: 'get'
});
```

این روش امکان پیاده‌سازی منطق retry تمیز را فراهم می‌کند؛ مثلاً هنگام مدیریت خطاهای احراز هویت:

```js
instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    await refreshToken();
    return instance(error.config); // ارسال مجدد درخواست اصلی
  }

  throw error;
});
```