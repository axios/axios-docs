---
title: 'Обработка ошибок'
prev_title: 'Перехват запросов'
prev_link: '/ru/docs/interceptors'
next_title: 'Отмена запроса'
next_link: '/ru/docs/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // Запрос был сделан, и сервер ответил кодом состояния, который
      // выходит за пределы 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // Запрос был сделан, но ответ не получен
      // `error.request`- это экземпляр XMLHttpRequest в браузере и экземпляр
      // http.ClientRequest в node.js
      console.log(error.request);
    } else {
      // Произошло что-то при настройке запроса, вызвавшее ошибку
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

Используя параметр конфигурации `validateStatus`, вы можете определить HTTP-коды, которые должны вызывать ошибку.

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // Разрешить, если код состояния меньше 500
  }
})
```

Используя `toJSON`, вы получаете объект с дополнительной информацией об ошибке HTTP.

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```