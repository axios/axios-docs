---
title: 'İstek Konfigürasyonu'
prev_title: 'Axios Objesi'
prev_link: '/docs/instance'
next_title: 'Yanıt Şeması'
next_link: '/docs/res_schema'
---


Bunlar, istek yapmak için mevcut konfigürasyon seçenekleridir. Yalnızca `url` gereklidir. Eğer `method` belirtilmezse, istekler varsayılan olarak `GET` olur.

```js
{
  // `url` istek için kullanılacak sunucu URL'sidir
  url: '/user',

  // `method` istek yapılırken kullanılacak istek metotudur
  method: 'get', // varsayılan

  // `url` mutlak olmadığı sürece `baseURL`, `url`nin başına eklenecektir.
  // Bir axios örneğine göreli URL'leri o örneğin yöntemlerine iletmek için "baseURL" ayarlamak uygun olabilir..

  // `baseURL`, `url` mutlak (tam bir url) olmadığı sürece `url`ye eklenecektir
  // Bir axios objesiyle ilgili URL'leri o objenin yöntemlerine iletmesi için `baseURL`
  // ayarlamak uygun olabilir.
  baseURL: 'https://some-domain.com/api',

  // `transformRequest` sunucuya gönderilmeden önce istek verilerinde değişikliklere izin verir
  // Bu yalnızca 'PUT', 'POST', 'PATCH' ve 'DELETE' istek metotları için geçerlidir.
  // Dizideki son fonksiyon bir string veya bir Buffer, ArrayBuffer, FormData veya Stream objesi döndürmelidir
  // `headers` nesnesini değiştirebilirsiniz.
  transformRequest: [function (data, headers) {
    //Verileri dönüştürmek için bir şey yap

    return data;
  }],

  // `transformResponse` yanıt verilerinde değişiklik yapılmasına izin verir
  // dönüştürüldüken sonra then/catch'a verilir
  transformResponse: [function (data) {
    // Verileri dönüştürmek için bir şey yap

    return data;
  }],

  // `headers` istek ile gönderilecek özel başlıklardır (headerlar)
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` istekle birlikte gönderilecek URL parametreleridir
  // Düz bir nesne veya bir URLSearchParams nesnesi olmalıdır
  // NOT: boş veya tanımsız olan parametreler URL'de işlenmez.
  params: {
    ID: 12345
  },

  // 'paramsSerializer', 'params' serileştirmesini özelleştirmenize olanak tanıyan isteğe bağlı bir yapılandırmadır.
  paramsSerializer: {

    //Anahtar/değer çiftlerini yinelemeli bir şekilde gönderen özel kodlayıcı işlevi.
    encode?: (param: string): string => { /* Burada özel işlemler yapın ve dönüştürülmüş dizeyi döndürün */ }, 
    
    // Parametrenin tamamı için özel serileştirici işlevi. Kullanıcının 1.x öncesi davranışı taklit etmesine olanak tanır.
    serialize?: (params: Record<string, any>, options?: ParamsSerializerOptions ), 
    
    //Paramlardaki dizi dizinlerini biçimlendirmek için yapılandırma.
    indexes: false // Mevcut üç seçenek:
    // (1) indexes: null (parantezlerin olmamasına yol açar), 
    // (2) (default) indexes: false (boş parantezlere yol açar),
    // (3) indexes: true (indeksli parantezlere yol açar).    
  },

  // `data` istek gövdesi olarak gönderilecek veridir
  // Yalnızca 'PUT', 'POST', 'DELETE ve 'PATCH' istek metotları için geçerlidir
  // Eğer `transformRequest` belirlenmemişse, bu obje türlerinden biri olmalıdır:
  // - string, düz nesne, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Sadece tarayıcı için: FormData, File, Blob
  // - Sadece Node.js için: Stream, Buffer
  data: {
    firstName: 'Efe'
  },

  // istek gövdesine veri göndermek için alternatif bir sentaks
  // post metodu kullanılır
  // yalnızca değer gönderilir, anahtar (key) gönderilmez
  data: 'Country=Turkey&City=Adana',

  // `timeout` istek zaman aşımına uğramadan önceki milisaniye sayısını belirtir.
  // İstek `timeout`dan daha uzun sürerse istek iptal edilir.
  timeout: 1000, // varsayılan `0`dır (zaman aşımı yok)

  // `withCredentials` siteler arası Access-Control isteklerinin olup olmadığını belirtir
  // kimlik bilgileri (credentials) kullanılarak yapılmalıdır
  withCredentials: false, // varsayılan

  // `adapter` isteklerin özel olarak işlenmesine izin verir, bu testleri kolaylaştırır
  // Promise döndürün ve geçerli bir yanıt belirtin (bkz lib/adapters/README.md).
  adapter: function (config) {
    /* ... */
  },

  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  // Please note that only HTTP Basic auth is configurable through this parameter.
  // For Bearer tokens and such, use `Authorization` custom headers instead.
  auth: {
    username: 'louis',
    password: 's00pers3cret'
  },

  // `responseType` sunucunun yanıt vereceği veri türünü belirtir
  //  mevcut seçenekler: 'arraybuffer', 'document', 'json', 'text', 'stream'
  //   sadece tarayıcı için: 'blob'
  responseType: 'json', // varsayılan

  // `responseEncoding` yanıtları dekode etmek için kullanılacak karakter kodlamasını belirtir (sadece Node.js)
  // Not: `responseType`, 'stream' olduğunda veya istemci taraflı isteklerde yok sayılır
  responseEncoding: 'utf8', // varsayılan

  // `xsrfCookieName` xsrf tokeni için değer olarak kullanılacak çerezin adıdır
  xsrfCookieName: 'XSRF-TOKEN', // varsayılan

  // `xsrfHeaderName` xsrf tokenini taşıyan HTTP üstbilgisinin adıdır (header)
  xsrfHeaderName: 'X-XSRF-TOKEN', // varsayılan

  // `onUploadProgress` yüklemeler için ilerleme olaylarının işlenmesine izin verir
  // sadece tarayıcı içindir
  onUploadProgress: function (progressEvent) {
    // İlerleme ile ilgili bir şey yap
  },

  // `onDownloadProgress` indirmeler için ilerleme olaylarının işlenmesine izin verir
  // sadece tarayıcı içindir
  onDownloadProgress: function (progressEvent) {
    // İlerleme ile ilgili bir şey yap
  },

  // `maxContentLength` node.js'de izin verilen bayt cinsinden http yanıtı içeriğinin
  // maksimum boyutunu tanımlar
  maxContentLength: 2000,

  // `maxBodyLength` (Yalnızca Node.js), izin verilen bayt cinsinden http istek içeriğinin
  // maksimum boyutunu tanımlar
  maxBodyLength: 2000,

  // `validateStatus` belirli bir HTTP yanıt durum kodu için verilen promise'in çözülüp çözülmeyeceğini (resolve)
  // veya reddedileceğini (reject) tanımlar. `validateStatus`, `true` değerini döndürürse (veya `null`
  // veya `undefined` olarak belirlenirse), promise çözülecektir (resolve); aksi takdirde promise
  // reddedilecektir (reject).
  validateStatus: function (status) {
    return status >= 200 && status < 300; // varsayılan
  },

  // `maxRedirects` node.js için takip edilecek maksimum yönlendirme sayısını belirler
  // 0 olarak ayarlanırsa, hiçbir yönlendirme takip edilmez.
  maxRedirects: 5, // varsayılan

  // `socketPath` node.js'de kullanılacak UNIX socket'ini belirler
  // örneğin istekleri docker daemon'una göndermek için: '/var/run/docker.sock'
  // Sadece, `socketPath` veya `proxy` seçeneklerinden biri belirlenebilir.
  // İkisi de belirlenmiş ise, `socketPath` kullanılır.
  socketPath: null, // varsayılan

  // `httpAgent` ve `httpsAgent`, Node.js'de sırasıyla http ve https istekleri
  // gerçekleştirirken kullanılacak user agenti tanımlar. Bu, varsayılan olarak
  // etkin olmayan 'keepAlive' gibi seçeneklerin eklenmesine izin verir.  
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` proxy sunucusunun ana bilgisayar adını, bağlantı noktasını ve protokolünü tanımlar.
  // Proxy'nizi `http_proxy` ve `https_proxy` ortam değişkenlerini kullanarak da tanımlayabilirsiniz.
  // Eğer proxy konfigürasyonunuz için ortam değişkenleri kullanıyor iseniz, ek olarak virgül ile
  // ayrılmış şekilde proxy kullanılmayacak alan adlarını `no_proxy` ortam değişkeninde belirleyebilirsiniz.
  // Proxy kullanımını devre dışı bırakmak için `false` değerini kullanın. Bu ortam değişkenlerini yok sayar.
  // `auth`, HTTP temel erişim kimlik doğrulaması (Basic auth) bu proxy'e bağlanmak için gerektiğini veya
  // gerekmediğini belirtir, ve kimlik bilgilerini sağlar.
  // Bu aynı zamanda, herhangi mevcut özel olarak belirlediğiniz `Proxy-Authorization` değerini de yok sayacak
  // olan `Proxy-Authorization` üstbilgisini ekler.
  // Eğer proxy sunucusu HTTPS kullanıyor ise, protocol `https` olmalıdır.
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'louis',
      password: 'zbab123'
    }
  },

  // `cancelToken` isteği iptal etmek için kullanılabilecek olan cancel token
  // (ayrıntılar için İptal etme bölümüne bakınız)
  cancelToken: new CancelToken(function (cancel) {
  }),

  // 'decompress', yanıt gövdesinin sıkıştırılmasının otomatik olarak açılıp açılmamasını
  // belirler. Eğer `true` olarak belirlenir ise ek olarak tüm sıkıştırılması açılan objelerin
  // 'content-encoding' üstbilgisini yanıtlarından kaldıracaktır.
  // - Sadece Node.js (XHR sıkıştırılmanın açılmasını kapatamıyor)
  decompress: true // varsayılan

}
```
