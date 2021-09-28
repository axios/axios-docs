---
title: 'Схема відповіді'
prev_title: 'Конфігурація запиту'
prev_link: '/uk/docs/req_config'
next_title: 'Конфігурація за замовчуванням'
next_link: '/uk/docs/config_defaults'
---

Відповідь на запит містить таку інформацію.

```js
{
  // `data` - це відповідь, надана сервером
  data: {},

  // `status` - це код стану HTTP з відповіді сервера
  status: 200,

  // `statusText` - це повідомлення про стан HTTP від відповіді сервера
  statusText: 'OK',

  // `заголовки` заголовки HTTP, на які відповів сервер
  // Усі назви заголовків малі та доступні за допомогою дужок.
  // Приклад: `response.headers['content-type']`
  headers: {},

  // `config` - це конфігурація, надана` axios` для запиту
  config: {},

  // `запит` - це запит, який створив цю відповідь
  // Це останній екземпляр ClientRequest у node.js (у переспрямуваннях)
  // і екземпляр XMLHttpRequest у веб -переглядачі
  request: {}
}
```

При використанні "then" ви отримаєте відповідь наступним чином:

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

При використанні `catch` або передачі [rejection колбеку](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) як другого параметра `then` відповідь буде доступна через об'єкт `error`, як пояснюється в [Обробці помилок](/uk/docs/handling_errors) section.