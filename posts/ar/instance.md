---
title: 'نموذج Axios'
prev_title: 'Axios API'
prev_link: '/ar/docs/api_intro'
next_title: 'تكوين الطلب'
next_link: '/ar/docs/req_config'
---

### إنشاء نموذج

يمكنك إنشاء نموذج جديد من axios بتكوين مخصص.

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### طرق النموذج

الطرق المتاحة للنموذج مدرجة أدناه. سيتم دمج التكوين المحدد مع تكوين النموذج.

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])

### استدعاء النموذج بكائن التكوين

بالإضافة إلى استخدام طرق الراحة مثل `instance.get()` أو `instance.post()`، يمكنك أيضًا استدعاء نموذج Axios مباشرة بكائن التكوين. هذا يعادل وظيفيًا `axios(config)`، وهو مفيد بشكل خاص عند إعادة محاولة طلب باستخدام التكوين الأصلي.

```js
const instance = axios.create({ baseURL: '/api' });

// يعمل مثل axios(config)
instance({
  url: '/users',
  method: 'get'
});
```

هذا النهج يمكن منطق إعادة المحاولة النظيف عند التعامل مع أخطاء المصادقة:

```js
instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    await refreshToken();
    return instance(error.config); // إعادة محاولة الطلب الأصلي
  }

  throw error;
});
```
