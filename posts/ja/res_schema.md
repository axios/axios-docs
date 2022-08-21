---
title: 'レスポンスのスキーマ'
prev_title: 'リクエストの設定'
prev_link: '/ja/docs/req_config'
next_title: '設定の初期値'
next_link: '/ja/docs/config_defaults'
---

リクエストに対するレスポンスには以下の情報が含まれます。

```js
{
  // `data` はサーバから提供されたレスポンスです
  data: {},

  // `status` はサーバのレスポンスに含まれる HTTP ステータスコードです
  status: 200,

  // `statusText` はサーバのレスポンスに含まれる HTTP ステータスメッセージです
  // HTTP/2 時点ではステータステキストは空白または未対応です。
  // (HTTP/2 RFC: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)
  statusText: 'OK',

  // `headers` サーバが応答した HTTP ヘッダ
  // ヘッダ名はすべて小文字で [] を使ってアクセスできます。
  // 例: `response.headers['content-type']`
  headers: {},

  // `config` はリクエストの際に `axios` に提供された設定です
  config: {},

  // `request` はこのレスポンスを生成したリクエストです
  // node.js では最後の ClientRequest インスタンス (リダイレクト時) であり、
  // ブラウザでは XMLHttpRequest インスタンスとなります
  request: {}
}
```

`then` を使用すると、次のようなレスポンスを受け取ります:

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

`catch`を使用する場合、または `then` の第2パラメータとして [rejection callback](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) を渡す場合、 [例外処理](/ja/docs/handling_errors) のセクションで説明したように、 `error` オブジェクトを通じてレスポンスが利用できるようになります。
