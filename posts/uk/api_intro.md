---
title: 'Axios API'
description: 'Посилання на API Axios'
prev_title: 'POST Requests'
prev_link: '/uk/docs/post_example'
next_title: 'Екземпляр Axios'
next_link: '/uk/docs/instance'
---

Запити можна подавати, передавши відповідну конфігурацію `axios`.

##### axios(config)

```js
// Надіслати POST-запит
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
// GET-запит на віддалений образ у node.js
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
// Надіслати запит GET (метод за замовчуванням)
axios('/user/12345');
```

### Псевдоніми методу запиту

Для зручності були надані псевдоніми для всіх підтримуваних методів запиту.

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

###### ПРИМІТКА
При використанні методів псевдонімів `url`,` method` та `data` властивості не потрібно вказувати в config.
