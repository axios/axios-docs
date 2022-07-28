---
title: '取消'
prev_title: '處理錯誤'
prev_link: '/docs/handling_errors'
next_title: 'URL 編碼本體'
next_link: '/docs/urlencoded'
---

## AbortController

自 `v0.22.0` 開始，Axios 支援 [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)，以已 fetch API 的方式取消請求：

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

## CancelToken `已棄用`

您也可以使用 *CancelToken* 來取消請求。

> axios 取消權杖 API 是基於被撤銷的[可取消 promise 提案](https://github.com/tc39/proposal-cancelable-promises)。

> 此 API 自 `v0.22.0` 開始已被棄用，不應於新專案中使用。

您可以使用 `CancelToken.source` 工廠來建立取消權杖，如下所示：

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('已取消請求', thrown.message);
  } else {
    // 處理錯誤
  }
});

axios.post('/user/12345', {
  name: '新名字'
}, {
  cancelToken: source.token
})

// 取消請求 (訊息參數為選填)
source.cancel('操作遭使用者取消。');
```

您也可以向 `CancelToken` 建構子傳遞執行函數來建立取消權杖：

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // 執行函數接收到作為參數的取消函數
    cancel = c;
  })
});

// 取消請求
cancel();
```

> 提醒：您可以使用相同的取消權杖 / 信號來取消多個請求。

在轉換期，您可以對同個請求同時使用兩種取消 API：

```js
const controller = new AbortController();

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token,
  signal: controller.signal
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('請求已取消', thrown.message);
  } else {
    // 處理錯誤
  }
});

axios.post('/user/12345', {
  name: '新名字'
}, {
  cancelToken: source.token
})

// 取消請求 (訊息參數為選填)
source.cancel('操作遭使用者取消。');
// 或
controller.abort(); // 不支援訊息參數
```
