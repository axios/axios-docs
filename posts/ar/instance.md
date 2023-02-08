---
title: 'مثيل Axios'
prev_title: 'واجهة برمجة التطبيقات Axios'
prev_link: '/docs/api_intro'
next_title: 'تكوين طلب'
next_link: '/docs/req_config'
---

### إنشاء مثيل

يمكنك إنشاء مثيل جديد من Axios بتكوين مخصص.

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### طرق المثيل

طرق المثيل المتاحة مذكورة أدناه. سيتم دمج التكوين المحدد مع ملف التكوين.

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])