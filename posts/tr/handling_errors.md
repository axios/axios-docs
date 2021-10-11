---
title: 'Hataları Ele Alma'
prev_title: 'Yol kesiciler'
prev_link: '/docs/interceptors'
next_title: 'İptal etme'
next_link: '/docs/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // İstek gönderildi ve sunucu 2xx aralığının dışında bir durum koduyla yanıt verdi
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // İstek gönderildi ancak herhangi bir yanıt alınmadı
      // `error.request`, tarayıcıda bir XMLHttpRequest objesidir ve
      // node.js'de ise bir http.ClientRequest objesidir
      console.log(error.request);
    } else {
      // İsteği yapılandırırken bir şey oldu ve bu hatayı tetikledi
      console.log('Hata', error.message);
    }
    console.log(error.config);
  });
```

Konfigürasyonunuzda `validateStatus` seçeneğini kullanarak, hata verilmesi gereken HTTP kodlarını/kodunu belirtebilirsiniz.

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // Yalnızca durum kodu 500'den küçükse istek başarılı sayılır (Promise çözümlenir)
  }
})
```

`toJSON` kullanarak HTTP hatasıyla ilgili daha fazla bilgiye sahip bir obje alabilirsiniz.

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```
