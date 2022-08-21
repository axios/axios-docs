---
title: 'Axios API'
description: 'Axios API リファレンス'
prev_title: 'POST リクエスト'
prev_link: '/ja/docs/post_example'
next_title: 'Axios インスタンス'
next_link: '/ja/docs/instance'
---

関連する設定を `axios` に渡すことでリクエストを行うことができます。

##### axios(config)

```js
// POST リクエストを送信する
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

```js
// node.js での画像の GET リクエスト
axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });
```

##### axios(url[, config])

```js
// GETリクエストの送信 (デフォルトのメソッド)
axios('/user/12345');
```

### リクエストメソッドのエイリアス

便宜上、サポートされているすべてのリクエストメソッドに対してエイリアスが提供されています。

##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])
##### axios.patch(url[, data[, config]])

###### 注
エイリアスメソッドを使用する場合 `url`, `method`, `data` の各プロパティを設定する必要はありません。
