---
title: 'インターセプター'
prev_title: 'デフォルト設定'
prev_link: '/ja/docs/config_defaults'
next_title: 'エラー処理'
next_link: '/ja/docs/handling_errors'
---

リクエストやレスポンスが `then` や `catch` で処理される前に、それをインターセプトできます。

`use` 関数は、Promise が解決（fulfilled）または拒否（rejected）されたときに実行されるハンドラーをハンドラーのリストに追加します。ハンドラーは、fulfilled と rejected の関数によって定義されます。

オプションで `options` オブジェクトを第3引数として渡すことができます。 `synchronous` を true に設定するとハンドラーは同期的に定義されます。 false または未指定の場合はハンドラーは非同期として定義されます。さらに `runWhen` を指定することで、インターセプターを実行するタイミングを制御できます。関数を渡すと、true/false を返して実行するかどうかを決定できます。デフォルトでは常に true が返されます。

```js
// リクエスト インターセプターを追加します
axios.interceptors.request.use(function (config) {
    // リクエストが送信される前の処理
    return config;
  }, function (error) {
    // リクエスト エラーの処理
    return Promise.reject(error);
  },
  { synchronous: true, runWhen: () => /* この関数は true を返します */}
);

// レスポンス インターセプターを追加します
axios.interceptors.response.use(function onFulfilled(response) {
    // ステータスコードが 2xx の範囲にある場合、この関数が起動します
    // レスポンス データの処理
    return response;
  }, function onRejected(error) {
    // ステータスコードが 2xx の範囲外の場合、この関数が起動します
    // レスポンス エラーの処理
    return Promise.reject(error);
  });
```

通常、`onFulfilled` のレスポンスインターセプターは 2xx のステータスコードのレスポンスに対してのみ呼び出され、`onRejected` はそれ以外の場合に呼び出されます。
しかし、この動作は [validateStatus](/ja/docs/req_config) に依存します。
例えば、`validateStatus` が常に `true` を返すように設定されている場合、`onFulfilled` は**すべての**レスポンスに対して呼び出されます。

後でインターセプターを削除する必要がある場合は、削除できます。

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.reject(myInterceptor);
```

axios のカスタム インスタンスにインターセプターを追加できます。

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```
