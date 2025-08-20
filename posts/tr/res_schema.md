---
title: 'Yanıt Şeması'
prev_title: 'İstek Konfigürasyonu'
prev_link: '/tr/docs/req_config'
next_title: 'Konfigürasyon Varsayılanları'
next_link: '/tr/docs/config_defaults'
---

Bir isteğin yanıtı aşağıdaki bilgileri içerir.

```js
{
  // `data` sunucu tarafından sağlanan yanıttır
  data: {},

  // `status` sunucu yanıtından alınan HTTP durum kodudur
  status: 200,

  // `statusText` sunucu yanıtından alınan HTTP durum mesajıdır
  statusText: 'OK',

  // `headers` sunucunun yanıt verdiği HTTP üstbilgileri (headerlar)
  // Tüm başlık adları (header isimleri) küçük harfle yazılmıştır ve
  // parantez gösterimi kullanılarak erişilebilir.
  // Örneğin: `response.headers['content-type']`
  headers: {},

  // `config` bu istek için `axios`a verilmiş konfigürasyondur
  config: {},

  // `request` bu yanıtı oluşturan istek
  // node.js'deki son ClientRequest objesidir (yönlendirmelerde)
  // ve tarayıcıda ise bir XMLHttpRequest objesidir
  request: {}
}
```

`then` kullanırken, aşağıdaki gibi bir yanıt alırsınız:

```js
axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

`catch` kullanılırken veya `then` öğesinin ikinci parametresi olarak bir [rejection callback](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) geçerken, yanıt, [Hataları İşleme](/docs/handling_errors) bölümünde açıklandığı gibi `error` objesi aracılığıyla sunulacaktır.
