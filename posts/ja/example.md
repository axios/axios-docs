---
title: '最小の例'
description: 'axios の使用例を少しご紹介します'
prev_title: 'はじめに'
prev_link: '/ja/docs/intro'
next_title: 'POST リクエスト'
next_link: '/ja/docs/post_example'
---

## 注: CommonJS の使い方
`require()` で CommonJS のインポートを使うと同時に TypeScript の型付け (intellisense / autocomplete のため) をするには、次のような方法をとります:

```js
const axios = require('axios').default;

// axios.<method> で autocomplete やパラメータの型付けができるようになります
```

# 例

`GET` リクエストを実行する

```js
const axios = require('axios');

// 指定された ID のユーザに対してリクエストを行う
axios.get('/user?ID=12345')
  .then(function (response) {
    // 成功を処理する
    console.log(response);
  })
  .catch(function (error) {
    // 例外を処理する
    console.log(error);
  })
  .then(function () {
    // 常に実行される
  });

// 上記のリクエストは次のようにすることもできます
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
    // 常に実行される
  });

// async/await を使いたいですか？ 外側の関数/メソッドに `async` キーワードを追加してください。
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **注:** `async/await` は ECMAScript 2017 の一部であり、Internet Explorer や古いブラウザではサポートされていないため、注意して使用してください。