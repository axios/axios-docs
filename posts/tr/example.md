---
title: 'Basit Örnek'
description: "Axios'u kullanımı için küçük bir örnek"
prev_title: 'Intro'
prev_link: '/docs/intro'
next_title: 'POST İstekleri'
next_link: '/docs/post_example'
---

## not: CommonJS kullanımı
`require()` ile CommonJS importlarını kullanırken TypeScript yazımlarını (intellisense / otomatik tamamlama için) elde etmek için aşağıdaki yaklaşımı kullanın:

```js
const axios = require('axios').default;

// axios.<method> artık otomatik tamamlama ve parametre yazımları sağlayacaktır
```

# Örnek

`GET` isteği göndermek

```js
const axios = require('axios');

// Belirli bir ID'ye sahip bir kullanıcı için istek gönder
axios.get('/user?ID=12345')
  .then(function (response) {
    // başarılı
    console.log(response);
  })
  .catch(function (error) {
    // hatayı ele al
    console.log(error);
  })
  .finally(function () {
    // her koşulda çalıştırılır
  });

// İsteğe bağlı olarak yukarıdaki istek şu şekilde de gönderilebilir:
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // her koşulda çalıştırılır
  });  

// async/await mi kullanmak istiyorsunuz? `async` anahtar sözcüğünü dış fonksiyonunuza/metotunuza ekleyin.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **NOT:** "async/await", ECMAScript 2017'nin bir parçasıdır ve İnternet'te desteklenmez
> Explorer ve daha eski tarayıcılar, bu nedenle dikkatli kullanın.
