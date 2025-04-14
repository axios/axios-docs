---
title: 'レスポンス スキーマ'
prev_title: 'リクエスト設定'
prev_link: '/ja/docs/req_config'
next_title: 'デフォルト設定'
next_link: '/ja/docs/config_defaults'
---

リクエストに対するレスポンスには、以下の情報が含まれます。

```js
{
  // `data` はサーバーから提供されたレスポンスです。
  data: {},

  // `status` はサーバーのレスポンスに含まれる HTTP ステータスコードです。
  status: 200,

  // `statusText` はサーバーのレスポンスに含まれる HTTP ステータスメッセージです。
  // HTTP/2 の場合、ステータス テキストは空白または未対応 (unsupported) です。
  // (HTTP/2 RFC: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)
  statusText: 'OK',

  // `headers` サーバーが応答した HTTP ヘッダー
  // ヘッダー名はすべて小文字で、ブラケット記法でアクセスできます。
  // 例: `response.headers['content-type']`
  headers: {},

  // `config` はリクエストの際に `axios` に提供された設定です。
  config: {},

  // `request` は、このレスポンスを生成したリクエストです
  // これは、Node.js (リダイレクト内) の最後の ClientRequest インスタンスであり、
  // ブラウザの XMLHttpRequest インスタンスです。
  request: {}
}
```

`then` を使用すると、次のようなレスポンスが返されます:

```js
axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

`catch` を使用する場合、または `then` の 2 番目のパラメーターとして [拒否コールバック](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) を渡す場合、[エラー処理](https://axios-http.com/docs/handling_errors) セクションで説明されているように、レスポンスは `error` オブジェクトを介して利用できます。
