---
title: '例外処理'
prev_title: 'インターセプタ'
prev_link: '/ja/docs/interceptors'
next_title: 'キャンセル'
next_link: '/ja/docs/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // リクエストが送信され、 2xx の範囲外にあるステータスコードのレスポンスを受信した場合
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // リクエストは送信されたが、レスポンスを受信しなかった場合
      // `error.request` は、ブラウザでは XMLHttpRequest のインスタンス、
      // node.js では http.ClientRequest のインスタンスです
      console.log(error.request);
    } else {
      // リクエストを送信する前に、セットアップ中に例外が発生した場合
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

`validateStatus` 設定オプションを使用すると、例外を発生させる HTTP コードを定義することができます。

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // ステータスコードが 500 未満の場合のみ resolve する
  }
})
```

`toJSON` を使用すると、HTTP エラーに関する詳細な情報を持つオブジェクトを取得できます。

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```