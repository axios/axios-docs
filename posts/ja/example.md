---
title: '最小構成の使用例'
description: 'Axios の簡単な使用例'
prev_title: 'Axios 入門'
prev_link: '/ja/docs/intro'
next_title: 'POST リクエスト'
next_link: '/ja/docs/post_example'
---

## 注: CommonJS の使用法

CommonJS の `require()` 関数でインポートをしながら、TypeScript の型付け (インテリセンスやオートコンプリートのため) を利用するためには、以下の方法を使用します。

```js
const axios = require('axios').default;

// axios.<method> がオートコンプリートやパラメータの型付けを提供するようになります
```

# 例

`GET` リクエストを実行する

```js
const axios = require('axios');

// 指定された ID のユーザーに対してリクエストを行う
axios.get('/user?ID=12345')
  .then(function (response) {
    // 処理が成功した場合
    console.log(response);
  })
  .catch(function (error) {
    // エラー処理
    console.log(error);
  })
  .then(function () {
    // 常に実行
  });

// オプションとして、上記のリクエストは次のようにすることもできます
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // 常に実行
  });  

// async/await を使いたい場合は、外側の関数/メソッドに `async` キーワードを追加してください。
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **注:** `async/await`は ECMAScript 2017 の一部であり、Internet Explorer および
> 古いブラウザーではサポートされていないため、注意して使用してください。
