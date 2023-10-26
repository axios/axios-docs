---
title: 'Axios API'
description: 'Справочник по Axios API'
prev_title: 'POST запросы'
prev_link: '/docs/post_example'
next_title: 'Экземпляр Axios'
next_link: '/docs/instance'
---

Запросы могут быть сделаны путем передачи соответствующей конфигурации в `axios`

##### axios(config)

```js
// Отправить POST-запрос
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

```js
// GET-запрос удаленного изображения в node.js
axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });
```

##### axios(url[, config])

```js
// Отправить GET-запрос (метод по умолчанию)
axios('/user/12345');
```

### Request method aliases

Для удобства для всех поддерживаемых методов запроса предоставлены сокращения.

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

###### Примечание
При использовании сокращений `url`, `method` и `data` свойства не нужно указывать в config.
