---
title: 'Скасування'
prev_title: 'Обробка помилок'
prev_link: '/uk/docs/handling_errors'
next_title: 'URL-кодування тіла'
next_link: '/uk/docs/urlencoded'
---

## Cancelling requests

Встановлення `timeout` property in an axios call handles **response** related timeouts. 

В деяких випадках (e.g. network connection becomes unavailable) an axios запит отримає перевагу від відміни попереднього **connection**. Без відміни, axios запит може очікувати до тих пір поки баківсякий code/stack не спрацює times out (мож буди до декількох хвилин на стороні server-side додатку). 

Аби знищити axios запит ви можете використати наступні методи:
- `signal`
- `cancelToken` (deprecated)

Комбінування `timeout` and скасувального метода (наприклад `signal`) мусить покрити **response** повязаними timeouts ТА **connection** повязаними timeouts.

### `signal`: AbortController

Починаючи з `v0.22.0` Axios підтримує [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) для скасуваня запитів в fetch API таким чином:

```js
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// скасування запиту та всіх слідуюючих
controller.abort()
```

Приклад з timeout використовуючи [`AbortSignal.timeout()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout) API [nodejs 17.3+]:
```js
axios.get('/foo/bar', {
   signal: AbortSignal.timeout(5000) // Скасування запиту через 5 секунд
}).then(function(response) {
   //...
});
```

Приклад з допоможною timeout функцією:
```js
function newAbortSignal(timeoutMs) {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeoutMs || 0);

  return abortController.signal;
}

axios.get('/foo/bar', {
   signal: newAbortSignal(5000) //Aborts request after 5 seconds
}).then(function(response) {
   //...
});
```

Приклад скасування попередніх запитів окрім останнього:
```js
const AbortControllerService = () => {
  /*
    Service to abort all previous api calls
   */
  let controller = new AbortController();
  const getControllerSignal = () => controller.signal;
  const abortController = () => controller.abort();
  const reinitController = () => {
    controller = new AbortController();
  };
  const reRunController = () => {
    abortController();
    reinitController();
  };

  return {
    getControllerSignal,
    reRunController,
  };
};
const abortControllerService = AbortControllerService();

const makeRequest = () => {
    // скасування попередніх запитів та створення нового `controller`
    abortControllerService.reRunController();
    
    axios.get('/foo/bar', {
       signal: abortControllerService.getControllerSignal()
    }).then(function(response) {
       //...
    });
}
makeRequest();
```
### CancelToken `deprecated`
API `CancelToken.source` застаріле з `v.0.22.0` та не повино використовуватись у проекті.

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
