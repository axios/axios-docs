---
title: 'Перехоплювачі'
prev_title: 'Конфігурація за замовчуванням'
prev_link: '/uk/docs/config_defaults'
next_title: 'Обробка помилок'
next_link: '/uk/docs/handling_errors'
---

Ви можете перехопити запити чи відповіді, перш ніж їх обробляти `then` або` catch`.

```js
// Додати перехоплювач запиту
axios.interceptors.request.use(function (config) {
    // Зробіть що-небудь перед надсиланням запиту
    return config;
  }, function (error) {
    // Зробіть щось із помилкою запиту
    return Promise.reject(error);
  });

// Додайте перехоплювач відповідей
axios.interceptors.response.use(function (response) {
    // Будь-який код стану, що знаходиться в межах 2хх, викликає спрацьовування цієї функції
    // Зробіть щось із даними відповіді
    return response;
  }, function (error) {
    // Будь-які коди стану, які виходять за межі діапазону 2xx, викликають спрацьовування цієї функції
    // Зробіть щось із помилкою запиту
    return Promise.reject(error);
  });
```

Якщо пізніше вам потрібно буде видалити перехоплювач, ви маєте цю можливість.

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

Ви можете додати перехоплювачі до користувацького екземпляра axios.

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```