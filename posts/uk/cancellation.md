---
title: 'Скасування'
prev_title: 'Обробка помилок'
prev_link: '/uk/docs/handling_errors'
next_title: 'URL-кодування тіла'
next_link: '/uk/docs/urlencoded'
---

Ви можете скасувати запит, використовуючи *маркер скасування* (або *cancel token*).

> The axios cancel token API is based on the withdrawn [cancelable promises proposal](https://github.com/tc39/proposal-cancelable-promises).

Ви можете створити маркер скасування, використовуючи фабрику `CancelToken.source`, як показано нижче:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // обробка помилки
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// скасувати запит (параметр повідомлення необов’язковий)
source.cancel('Operation canceled by the user.');
```

Ви також можете створити маркер скасування, передавши функцію виконавця конструктору `CancelToken`:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // Виконавча функція (або executor function) отримує функцію скасування як параметр
    cancel = c;
  })
});

// скасування запиту
cancel();
```

> Note: you can cancel several requests with the same cancel token.
