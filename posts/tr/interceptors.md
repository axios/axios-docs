---
title: 'Yol Kesiciler'
prev_title: 'Konfigürasyon Varsayılanları'
prev_link: '/docs/config_defaults'
next_title: 'Hataları Ele Alma'
next_link: '/docs/handling_errors'
---

İstekleri veya yanıtları "then" veya "catch" tarafından işlenmeden önce ele alabilirsiniz.

```js
// İstek için yol kesici ekle
axios.interceptors.request.use(function (config) {
    // Yanıt gönderilmeden önce bir şey yap
    return config;
  }, function (error) {
    // Yanıttaki hata ile bir şey yap
    return Promise.reject(error);
  });

// İstek için yol kesici ekle
axios.interceptors.response.use(function (response) {
    // 2xx aralığında bulunan herhangi bir durum kodu, bu işlevin tetiklenmesine neden olur.
    // Yanıttaki veri ile bir şey yap
    return response;
  }, function (error) {
    // 2xx aralığının dışında kalan herhangi bir durum kodu, bu işlevin tetiklenmesine neden olur.
    // Yanıttaki hata ile bir şey yap
    return Promise.reject(error);
  });
```

Bir önleyiciyi daha sonra kaldırmanız gerekirse, bunu yapabilirsiniz:

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

Özel bir axios objesine de yol kesiciler ekleyebilirsiniz:

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```
