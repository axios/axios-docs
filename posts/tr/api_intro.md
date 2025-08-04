---
title: "Axios API'si"
description: 'Axios API Referansı'
prev_title: 'POST İstekleri'
prev_link: '/tr/docs/post_example'
next_title: 'Axios Objesi'
next_link: '/tr/docs/instance'
---


`axios` metotu uygun bir konfigürasyon ile çağrılarak istek oluşturulabilir

##### axios(config)

```js
// POST isteği gönderir
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Efe',
    lastName: 'Ceylan'
  }
});
```

```js
// Node.js ile uzak sunucudaki fotoğrafı kaydetmek için istek gönderir
axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream('muslum_gurses.jpg'))
  });
```

##### axios(url[, config])

```js
// GET isteği gönderir (varsayılan konfigürasyon)
axios('/user/12345');
```

### Takma ada sahip metotlar

Kolaylık için tüm HTTP istek metotlarının adlarına sahip metotlar mevcuttur.

##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])
##### axios.patch(url[, data[, config]])
##### axios.postForm(url[, data[, config]])
##### axios.putForm(url[, data[, config]])
##### axios.patchForm(url[, data[, config]])

###### NOT
Kolaylık sağlayan metotları kullanırken `url`, `method`, ve `data` özelliklerinin konfigürasyonda belirtilmesine gerek yoktur.
