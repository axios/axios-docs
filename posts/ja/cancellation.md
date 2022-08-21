---
title: 'キャンセル'
prev_title: '例外処理'
prev_link: '/ja/docs/handling_errors'
next_title: 'URLエンコードのボディ'
next_link: '/ja/docs/urlencoded'
---

## AbortController

`v0.22.0` 以降、Axios はフェッチ API の方法でリクエストをキャンセルする [`AbortController`](https://developer.mozilla.org/ja/docs/Web/API/AbortController) をサポートするようになりました。

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

## CancelToken `非推奨`

また、 *CancelToken* を使用してリクエストをキャンセルすることもできます。

> axios のキャンセルトークン API は、撤回された [cancelable promises proposal](https://github.com/tc39/proposal-cancelable-promises) をベースにしています。

> この API は `v0.22.0` から非推奨であり、新しいプロジェクトでは使用すべきでないです。

以下のように `CancelToken.source` ファクトリを使用してキャンセルトークンを作成することができます:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // 例外処理
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// リクエストをキャンセルする (メッセージは省略可能です)
source.cancel('Operation canceled by the user.');
```

また、 `CancelToken` コンストラクタに関数を渡してもキャンセルトークンを作成することができます:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // この関数はパラメータとしてキャンセル関数を受け取る
    cancel = c;
  })
});

// リクエストをキャンセルする
cancel();
```

> 注: 同じキャンセルトークン/シグナルで複数のリクエストをキャンセルすることができます。

移行期間中は、同じリクエストであっても両方のキャンセル API を使用することができます:

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
    // 例外処理
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// リクエストをキャンセルする (メッセージは省略可能です)
source.cancel('Operation canceled by the user.');
// もしくは
controller.abort(); // メッセージパラメータはサポートされていません
```
