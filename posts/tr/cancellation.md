---
title: 'İptal Etme'
prev_title: 'Hataları Ele Alma'
prev_link: '/docs/handling_errors'
next_title: 'URL-Encoding Gövdeleri'
next_link: '/docs/urlencoded'
---

Bir isteği *cancel token* kullanarak iptal edebilirsiniz.

> Axios cancel token API'si geri çekilmiş [iptal edilebilir promiseler tasarısı](https://github.com/tc39/proposal-cancelable-promises)'na dayalıdır.

`CancelToken.source` fabrikasını kullanarak aşağıda gösterildiği gibi cancel token oluşturabilirsiniz:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('İstek iptal edildi', thrown.message);
  } else {
    // hatayı ele al
  }
});

axios.post('/user/12345', {
  name: 'yeni isim'
}, {
  cancelToken: source.token
})

// isteği iptal et (mesaj parametresi isteğe bağlıdır)
source.cancel('İşlem kullanıcı tarafından iptal edildi.');
```

Ayrıca, `CancelToken` yapıcısına (constructor) bir executor fonksiyonu vererek de cancel token oluşturabilirsiniz.

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // Executor fonksiyonu iptal etme fonksiyonunu parametre olarak alır.
    cancel = c;
  })
});

// isteği iptal et
cancel();
```

> Note: aynı cancel token ile birçok isteği iptal edebilirsiniz.
