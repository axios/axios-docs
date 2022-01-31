---
title: 'Схема ответа'
prev_title: 'Конфигурация запроса'
prev_link: '/docs/req_config'
next_title: 'Конфигурация по умолчанию'
next_link: '/docs/config_defaults'
---

The response for a request contains the following information.

```js
{
  // `data`- это ответ, предоставленный сервером
  data: {},

  // `status`- это код состояния HTTP-запроса
  status: 200,

  // `statusText`- это сообщение о состоянии HTTP-запроса
  statusText: 'OK',

  // `headers` заголовки HTTP-запроса, на которые ответил сервер
  // Все имена заголовков написаны в нижнем регистре, и к ним можно получить доступ, используя квадратные скобки.
  // Например: `response.headers['content-type']`
  headers: {},

  // `config` - это конфигурация, которая была предоставлена ​​`axios` для запроса
  config: {},

  // `request` - это запрос, который сгенерировал этот ответ
  // Это последний экземпляр ClientRequest в node.js (в перенаправлениях)
  // и экземпляр XMLHttpRequest в браузере.
  request: {}
}
```

При использовании `then` вы получите следующий ответ:

```js
axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

При использовании `catch` или передаче [rejection callback](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) в качестве второго параметра `then` ответ будет доступен через объект `error`, как объясняется в разделе [Обработке ошибок](/docs/handling_errors).