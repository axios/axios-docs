---
title: '設定の初期値'
prev_title: 'レスポンスのスキーマ'
prev_link: '/ja/docs/res_schema'
next_title: 'インターセプタ'
next_link: '/ja/docs/interceptors'
---

## 設定の初期値

すべてのリクエストに適用される設定の初期値を指定できます。

### グローバル axios の初期値

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### カスタムインスタンスの初期値

```js
// インスタンス作成時に初期値を設定する
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// インスタンス作成後の初期値の変更
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### 設定の優先順位

設定は優先順位をつけてマージされます。その順番は [lib/defaults/index.js](https://github.com/axios/axios/blob/665db731099314ef6128188a5657bae0a142640d/lib/defaults/index.js#L49) にあるライブラリの初期値、 次にインスタンスの `defaults` プロパティ、最後にリクエストの `config` 引数の順です。後者が前者よりも優先されます。以下はその例です。

```js
// ライブラリが提供する設定の初期値を使ってインスタンスを作成する
// この時点では、タイムアウトの設定値はライブラリの初期値である `0` です
const instance = axios.create();

// ライブラリのタイムアウトの初期値を上書きする
// これで、このインスタンスを使用するすべてのリクエストは、タイムアウトするまで2.5秒待つようになります
instance.defaults.timeout = 2500;

// このリクエストには時間がかかることがわかっているため、タイムアウトを上書きします
instance.get('/longRequest', {
  timeout: 5000
});
```
