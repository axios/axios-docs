---
title: 'Перехват запросов'
prev_title: 'Конфигурация по умолчанию'
prev_link: '/ru/docs/config_defaults'
next_title: 'Обработка ошибок'
next_link: '/ru/docs/handling_errors'
---

Вы можете перехватывать запросы или ответы до того, как они будут `then` или `catch`.

```js
// Добавляем перехват запросов
axios.interceptors.request.use(function (config) {
    // Здесь можете сделать что-нибудь с перед отправкой запроса
    return config;
  }, function (error) {
    // Сделайте что-нибудь с ошибкой запроса
    return Promise.reject(error);
  });

// Добавляем перехват ответов
axios.interceptors.response.use(function (response) {
    // Любой код состояния, находящийся в диапазоне 2xx, вызывает срабатывание этой функции
    // Здесь можете сделать что-нибудь с ответом
    return response;
  }, function (error) {
    // Любые коды состояния, выходящие за пределы диапазона 2xx, вызывают срабатывание этой функции
    // Здесь можете сделать что-то с ошибкой ответа
    return Promise.reject(error);
  });
```

Если вам нужно, вы можете удалить перехватчик

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

Вы можете добавить перехватчики в пользовательский экземпляр axios.

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```