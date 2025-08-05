---
title: 'キャンセル'
prev_title: 'エラー処理'
prev_link: '/ja/docs/handling_errors'
next_title: 'URL-エンコードボディ'
next_link: '/ja/docs/urlencoded'
---

## リクエストのキャンセル

Axios を呼び出す際に `timeout` プロパティを設定することで、 **response** に関するタイムアウトを処理します。

一部のケース(例：ネットワーク接続が利用できなくなった場合)では、 Axios 呼び出しは **connection** を早期にキャンセルすることでメリットがあります。キャンセルを行わない場合、 Axios 呼び出しは親コード/スタックがタイムアウトするまで待機し続ける可能性があります（サーバーサイドアプリケーションでは数分かかる場合もあります）。

Axios 呼び出しを終了するには、以下のメソッドを使用できます:
- `signal`
- `cancelToken` (非推奨)

タイムアウトとキャンセルメソッド(例: `signal` )を組み合わせて、**response** に関するタイムアウトと **connection** に関するタイムアウトの両方に対応するべきです。

### `signal`: AbortController

Axios は `v0.22.0` から、fetch API のリクエストをキャンセルするために、[`AbortController`](https://developer.mozilla.org/ja/docs/Web/API/AbortController) をサポートしています:

```js
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// リクエストのキャンセル
controller.abort()
```

タイムアウトを使用した最新の [`AbortSignal.timeout()`](https://developer.mozilla.org/ja/docs/Web/API/AbortSignal/timeout_static) API の例 [nodejs 17.3+]:
```js
axios.get('/foo/bar', {
   signal: AbortSignal.timeout(5000) // 5秒後にリクエストを中止
}).then(function(response) {
   //...
});
```

タイムアウトのヘルパー関数を使用した例:
```js
function newAbortSignal(timeoutMs) {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeoutMs || 0);

  return abortController.signal;
}

axios.get('/foo/bar', {
   signal: newAbortSignal(5000) // 5秒後にリクエストを中止
}).then(function(response) {
   //...
});
```

### CancelToken `非推奨`

*CancelToken* を使用してリクエストをキャンセルすることもできます。

> Axios のキャンセルトークン API は、撤回された [cancelable promises proposal](https://github.com/tc39/proposal-cancelable-promises) に基づいています。

> この API は `v0.22.0` から非推奨になっているため、新しいプロジェクトでは使用しないでください。

以下の例のように、 `CancelToken.source` ファクトリを使用して CancelToken を作成できます:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // エラー処理
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// リクエストのキャンセル (メッセージパラメータは任意)
source.cancel('Operation canceled by the user.');
```

`CancelToken` コンストラクタに実行関数を渡すことで、 CancelToken を作成することもできます:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // 実行関数は、キャンセル関数をパラメータとして受け取ります
    cancel = c;
  })
});

// リクエストのキャンセル
cancel();
```

> 注: 同じ cancel token / signal を使用して、複数のリクエストをキャンセルできます

移行期間中は、同じリクエストであっても両方のキャンセル API を使用できます:

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
    // エラー処理
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// リクエストのキャンセル (メッセージパラメータは任意)
source.cancel('Operation canceled by the user.');
// または
controller.abort(); // メッセージパラメータはサポートされていません
```
