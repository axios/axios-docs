---
title: 'デフォルト設定'
prev_title: 'レスポンス スキーマ'
prev_link: '/ja/docs/res_schema'
next_title: 'インターセプター'
next_link: '/ja/docs/interceptors'
---

## デフォルト設定

すべてのリクエストに適用されるデフォルト設定を指定できます。

### グローバル Axios のデフォルト

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### カスタム インスタンスのデフォルト

```js
// インスタンスの作成時にデフォルト設定を指定する
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// インスタンスの作成後にデフォルト設定を変更する
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### 設定の優先順位

設定は、優先順位をつけてマージされます。その順番は [lib/defaults.js](https://github.com/axios/axios/blob/master/lib/defaults.js#L28) にあるライブラリのデフォルト、そしてインスタンスの `defaults` プロパティ、最後にリクエストの `config` 引数の順になります。後者が前者よりも優先されます。以下はその例です。

```js
// ライブラリが提供するデフォルトの設定を使用してインスタンスを作成します。
// この時点では、タイムアウトの設定値はライブラリのデフォルトである `0` になっています。
const instance = axios.create();

// ライブラリのデフォルトのタイムアウトを上書きします。
// これで、このインスタンスを使用するすべてのリクエストは、タイムアウトする前に 2.5秒待機します。
instance.defaults.timeout = 2500;

// 時間がかかることがわかっているため、このリクエストのタイムアウトをオーバーライドします。
instance.get('/longRequest', {
  timeout: 5000
});
```
