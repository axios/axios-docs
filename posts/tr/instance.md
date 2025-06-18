---
title: 'Axios Objesi'
prev_title: "Axios API'si"
prev_link: '/docs/api_intro'
next_title: 'İstek Konfigürasyonu'
next_link: '/docs/req_config'
---

### Bir obje oluşturma

Özel bir konfigürasyon ile yeni bir axios objesi oluşturabilirsiniz.

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### Metotlar

Axios objesinde kullanılabilir metotlar aşağıda listelenmiştir. Belirtilen konfigürasyon, objenin konfigürasyonu ile birleştirilecektir.

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])

### Konfigürasyon Objesiyle Doğrudan Çağırma

`instance.get()` veya `instance.post()` gibi yardımcı metotların yanı sıra, bir Axios örneğini doğrudan bir konfigürasyon objesiyle de çağırabilirsiniz. Bu kullanım, `axios(config)` ile aynıdır ve özellikle orijinal konfigürasyonla isteği tekrar göndermek istediğinizde faydalıdır.

```js
const instance = axios.create({ baseURL: '/api' });

// axios(config) gibi çalışır
instance({
  url: '/users',
  method: 'get'
});
```

Bu yöntem, örneğin kimlik doğrulama hatalarında temiz bir tekrar deneme (retry) mantığı kurmanıza olanak tanır:

```js
instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    await refreshToken();
    return instance(error.config); // Orijinal isteği tekrar gönder
  }

  throw error;
});
```