---
title: 'Konfigürasyon Varsayılanları'
prev_title: 'Yanıt Şeması'
prev_link: '/docs/res_schema'
next_title: 'Yol kesiciler'
next_link: '/docs/interceptors'
---

## Konfigürasyon Varsayılanları

Tüm istekleri etkileyecek konfigürasyon varsayılanları belirleyebilirsiniz.

### Genel axios varsayılanları

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### Özel, objeye has varsayılanlar

```js
// Objeyi oluştururken konfigürasyon varsayılanlarını belirle
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// Örnek oluşturulduktan sonra varsayılanları değiştirin
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### Konfigürasyon öncelik sırası

Konfigürasyon öncelik sırasına göre birleştirilecektir. Sıra, [`lib/defaults/index.js`](https://github.com/axios/axios/blob/v1.x/lib/defaults/index.js#L40) içinde bulunan kütüphane varsayılanlarıdır, ardından objenin `defaults` özelliğidir ve son olarak istek için `config` argümanı. İkincisi, birincisine göre öncelikli olacaktır. İşte bir örnek:

```js
// Kütüphane tarafından sağlanan yapılandırma varsayılanlarını kullanarak bir örnek oluşturun
// Bu noktada, zaman aşımı yapılandırma değeri, kütüphane için varsayılan değer olan `0`dır.
const instance = axios.create();

// Kütüphane için zaman aşımı varsayılanını geçersiz kıl
// Artık bu örneği kullanan tüm istekler zaman aşımına uğramadan önce 2,5 saniye bekleyecek
instance.defaults.timeout = 2500;

// Uzun zaman süreceği bilindiği için bu istek için zaman aşımını geçersiz kıl
instance.get('/longRequest', {
  timeout: 5000
});
```
