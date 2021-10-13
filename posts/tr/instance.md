---
title: 'Axios Objesi'
prev_title: 'Axios API\'si'
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
