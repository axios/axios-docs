---
title: 'インターセプタ'
prev_title: '設定の初期値'
prev_link: '/ja/docs/config_defaults'
next_title: '例外処理'
next_link: '/ja/docs/handling_errors'
---

リクエストやレスポンスが `then` や `catch` によって処理される前に、その処理をインターセプトすることができます。

```js
// リクエストのインターセプタを追加する
axios.interceptors.request.use(function (config) {
    // リクエストが送信される前に何かする
    return config;
  }, function (error) {
    // リクエストエラーで何かする
    return Promise.reject(error);
  });

// レスポンスのインターセプタを追加する
axios.interceptors.response.use(function (response) {
    // ステータスコードが 2xx の範囲にある場合、この関数が実行されます
    // レスポンスデータで何かする
    return response;
  }, function (error) {
    // ステータスコードが 2xx の範囲外にある場合、この関数が実行されます
    // レスポンスエラーで何かする
    return Promise.reject(error);
  });
```

後でインターセプタを取り除く必要がある場合は、取り除くことができます。

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

axios のカスタムインスタンスにインターセプタを追加することができます。

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```