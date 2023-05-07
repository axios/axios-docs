---
title: '取消請求'
prev_title: '錯誤處理'
prev_link: '/zhTW/docs/handling_errors'
next_title: 'URL 編碼主體'
next_link: '/zhTW/docs/urlencoded'
---

## 請求的取消

在調用 axios 方法時，設置 `timeout` 屬性可以處理 **response** 回應逾時

在某些情況下（例如：網路無法連線），axios 調用將受益於提前取消 **connection**。如果沒有設置提前取消，axios 調用可能會一直懸置，直到父層程式碼/堆疊逾時（在伺服器端應用程式中可能需要等待幾分鐘）。

若要終止 axios 請求，可以使用以下方法：
- `signal`
- `cancelToken` (已棄用)

結合 `timeout` 和提前取消方法（例如：`signal`）應該涵蓋 **response** 的逾時和 **connection** 的逾時。

### `signal`: AbortController

自 `v0.22.0` 開始，Axios 支援 [`AbortController`](https://developer.mozilla.org/zh-TW/docs/Web/API/AbortController) 用以取消 fetch API 中的請求：

```js
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// 取消請求
controller.abort()
```

以下為使用最新的 [`AbortSignal.timeout()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout) API [nodejs 17.3+]：
```js
axios.get('/foo/bar', {
   signal: AbortSignal.timeout(5000) // 5 秒後將取消請求
}).then(function(response) {
   //...
});
```

使用請求逾時輔助函數：
```js
function newAbortSignal(timeoutMs) {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeoutMs || 0);

  return abortController.signal;
}

axios.get('/foo/bar', {
   signal: newAbortSignal(5000) // 5 秒後將取消請求
}).then(function(response) {
   //...
});
```

## CancelToken `已棄用`

你可以使用 *cancel token* 取消請求

> Axios 的 cancel token API 是基於 [cancelable promises proposal](https://github.com/tc39/proposal-cancelable-promises)。

> 此 API 自 `v0.22.0` 開始已被棄用，不應該在新專案中使用

可以使用 `CancelToken.source` 工廠方法建立一個 cancel token，如下所示：

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // 錯誤處理
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// 取消請求(message 參數可選)
source.cancel('Operation canceled by the user.');
```

也可以藉由傳遞 `executor` 函式至 `CancelToken` 建構子建立一個 cancel token：

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // executor 函數接受一個 cancel 函數作為參數
    cancel = c;
  })
});

// 取消請求
cancel();
```

> 注意：可以使用同一個 cancel token 或 signal 取消多個請求。

在過渡時期時，即使在同一個請求也能夠同時採用這兩種提前取消 API 。

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
    // 錯誤處理
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// 取消請求（message 參數可選）
source.cancel('Operation canceled by the user.');
// 或
controller.abort(); // 不支援 message 參數
```
