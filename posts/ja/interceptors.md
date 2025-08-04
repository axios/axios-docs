---
title: 'インターセプター'
prev_title: 'デフォルト設定'
prev_link: '/ja/docs/config_defaults'
next_title: 'エラー処理'
next_link: '/ja/docs/handling_errors'
---

リクエストやレスポンスが `then` や `catch` で処理される前に、それをインターセプトできます。

```js
// リクエスト インターセプターを追加します
axios.interceptors.request.use(function (config) {
    // リクエストが送信される前の処理
    return config;
  }, function (error) {
    // リクエスト エラーの処理
    return Promise.reject(error);
  });

// レスポンス インターセプターを追加します
axios.interceptors.response.use(function (response) {
    // ステータスコードが 2xx の範囲にある場合、この関数が起動します
    // レスポンス データの処理
    return response;
  }, function (error) {
    // ステータスコードが 2xx の範囲外の場合、この関数が起動します
    // レスポンス エラーの処理
    return Promise.reject(error);
  });
```

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
