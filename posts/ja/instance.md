---
title: 'Axios インスタンス'
prev_title: 'Axios API'
prev_link: '/docs/api_intro'
next_title: 'リクエスト設定'
next_link: '/docs/req_config'
---

### インスタンスの作成

カスタム設定で新しい Axios のインスタンスを作成できます。

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### インスタンス メソッド

利用可能なインスタンス メソッドを以下に示します。指定された設定は、インスタンス設定にマージされます。

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])

### インスタンスを設定オブジェクトで直接呼び出す

`instance.get()` や `instance.post()` などの便利メソッドに加えて、Axios インスタンスは設定オブジェクトを直接渡して呼び出すこともできます。これは `axios(config)` と同様に動作し、元の設定でリクエストを再送したい場合などに便利です。

```js
const instance = axios.create({ baseURL: '/api' });

// axios(config) と同じように使えます
instance({
  url: '/users',
  method: 'get'
});
```

この方法は、認証エラー時のリトライ処理などにも役立ちます。

```js
instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    await refreshToken();
    return instance(error.config); // 元のリクエストを再送
  }

  throw error;
});
```