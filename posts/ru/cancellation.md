---
title: 'Отмена запросов'
prev_title: 'Обработка ошибок'
prev_link: '/docs/handling_errors'
next_title: 'URL-кодирующие параметры'
next_link: '/docs/urlencoded'
---

## AbortController

Начиная с версии `v0.22.0` Axios поддерживает [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) для отмены запросов через fetch API:

```js
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// отмена запроса
controller.abort()
```

## CancelToken `устарел`

Вы также можете отменить запрос, используя *CancelToken*. 

> API токена отмены axios основан на отозванном [cancelable promises proposal](https://github.com/tc39/proposal-cancelable-promises).

> Этот API устарел с версии `v0.22.0` и не должен использоваться для новых проектов

Вы можете создать токен отмены, используя `CancelToken.source`, как показано ниже:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // обработка ошибки
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// отмена запроса (указывать сообщение необязательно)
source.cancel('Operation canceled by the user.');
```

Вы также можете создать токен отмены, передав функцию-исполнитель конструктору CancelToken:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // Исполнительная функция (или executor function) получает функцию отмены в качестве параметра
    cancel = c;
  })
});

// отмена запроса
cancel();
```

> Примечание: вы можете отменить несколько запросов с одним и тем же токеном / сигналом отмены.

В течение переходного периода вы можете использовать оба API отмены даже для одного и того же запроса:

```js
const controller = new AbortController();

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token,
  signal: controller.signal
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // обработка ошибки
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// отмена запроса (указывать сообщение необязательно)
source.cancel('Operation canceled by the user.');
// ИЛИ
controller.abort(); // параметр сообщения не поддерживается
```
