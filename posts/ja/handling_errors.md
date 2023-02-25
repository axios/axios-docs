---
title: 'エラー処理'
prev_title: 'インターセプター'
prev_link: '/ja/docs/interceptors'
next_title: 'キャンセル'
next_link: '/ja/docs/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // リクエストが行われ、サーバーは
      // 2xx の範囲から外れるステータスコードで応答しました
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // リクエストは行われましたが、応答がありませんでした
      // `error.request` は、ブラウザでは XMLHttpRequest のインスタンスになり、
      // Node.js では http.ClientRequest のインスタンスになります。
      console.log(error.request);
    } else {
      // エラーをトリガーしたリクエストの設定中に何かが発生しました
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

`validateStatus` 設定オプションを使用すると、エラーをスローする HTTP コードを定義できます。

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // ステータスコードが 500 未満の場合にのみ解決します
  }
})
```

`toJSON` を使用すると、HTTP エラーに関する詳細情報を含むオブジェクトを取得できます。

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```
