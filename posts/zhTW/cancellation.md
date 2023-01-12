---
title: '取消請求'
prev_title: '錯誤處理'
prev_link: '/zhTW/docs/handling_errors'
next_title: 'URL-Encoding Bodies'
next_link: '/zhTW/docs/urlencoded'
---

## AbortController

自 `v0.22.0` 開始，Axios 支援了 [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) 讓您可以用類似 fetch API 的方式來取消請求

```js
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// cancel the request
controller.abort()
```

## CancelToken（已棄用）

您也可以用 *CancelToken* 來取消請求。

> Axios cancel token API 是以 [可取消的 Promise](https://github.com/tc39/proposal-cancelable-promises) 提案為基礎，這份提案已遭撤回。

> 自 `v0.22.0` 起此 API 已被棄用，不要再用於新專案

您可以用 `CancelToken.source` 建立 cancel token

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // handle error
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancel the request (the message parameter is optional)
source.cancel('Operation canceled by the user.');
```

您也可以在 `CancelToken` 的建構子中傳入一個函式來產生 cancel token。

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // An executor function receives a cancel function as a parameter
    cancel = c;
  })
});

// cancel the request
cancel();
```

> 備註：您可以用同樣的 cancel token/signal 取消多個請求

在過渡期間，您仍可使用這兩種取消 API（即便是對於同個請求）

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
    // handle error
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// 取消請求（message 參數為選填）
source.cancel('Operation canceled by the user.');
// 或者
controller.abort(); // 不支援 message 參數
```
