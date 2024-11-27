---
title: 'キャンセル'
prev_title: 'エラー処理'
prev_link: '/ja/docs/handling_errors'
next_title: 'URL-エンコードボディ'
next_link: '/ja/docs/urlencoded'
---

## リクエストのキャンセル

axios の呼び出しで `timeout` プロパティを設定すると、**応答** 関連のタイムアウトが処理されます。

場合によっては（ネットワーク接続が利用できなくなるなど）、axios の呼び出しは **接続** を早期にキャンセルしたほうがよいことがあります。キャンセルしないと、親 コード/スタック がタイムアウトするまで（サーバーサイドアプリケーションでは数分）、axios の呼び出しがハングアップする可能性があります。

axios の呼び出しを終了させるには、次の方法があります:
- `signal`
- `cancelToken` (非推奨)

`timeout` とキャンセル方法（例: `signal`）を組み合わせることで、**レスポンス** に関するタイムアウトと **コネクション** に関するタイムアウトをカバーすることができるはずです。

### `signal`: AbortController

`v0.22.0` 以降、Axios は [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) をサポートし、フェッチ API の方法でリクエストをキャンセルできるようになりました:

```js
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// リクエストをキャンセルする
controller.abort()
```

最新の [`AbortSignal.timeout()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout) API [Node.js 17.3+] を使用したタイムアウトの例です:
```js
axios.get('/foo/bar', {
   signal: AbortSignal.timeout(5000) // 5 秒後にリクエストを中止する
}).then(function(response) {
   //...
});
```

タイムアウトヘルパー関数付きの例:
```js
function newAbortSignal(timeoutMs) {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeoutMs || 0);

  return abortController.signal;
}

axios.get('/foo/bar', {
   signal: newAbortSignal(5000) // 5 秒後にリクエストを中止する
}).then(function(response) {
   //...
});
```

### CancelToken `非推奨`

*CancelToken* を使用してリクエストをキャンセルすることもできます。

> axios の cancel token APIは、[撤回された promises の提案](https://github.com/tc39/proposal-cancelable-promises) に基づくものです。

> この API は `v0.22.0` から非推奨となり、新しいプロジェクトでは使用しないでください。

`CancelToken.source` ファクトリーを使用して、以下のようにキャンセルトークンを作成することができます:

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

// リクエストをキャンセルする (message パラメータはオプション)
source.cancel('Operation canceled by the user.');
```

`CancelToken` のコンストラクタに executor 関数を渡すことで、キャンセルトークンを作成することもできます:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // executor 関数はパラメータとして cancel 関数を受け取る
    cancel = c;
  })
});

// リクエストをキャンセル
cancel();
```

> 注意: 同じ キャンセルトークン / シグナル で複数のリクエストをキャンセルすることができます。

移行期間中は、同じリクエストであっても、両方のキャンセル API を使用することができます:

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

// リクエストをキャンセルする (message パラメータはオプション)
source.cancel('Operation canceled by the user.');
// または
controller.abort(); // message パラメータはサポートされていません。
```
