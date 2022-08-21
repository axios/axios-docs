---
title: 'Axios インスタンス'
prev_title: 'Axios API'
prev_link: '/ja/docs/api_intro'
next_title: 'リクエストの設定'
next_link: '/ja/docs/req_config'
---

### インスタンスの作成

カスタム設定の新しい axios インスタンスを作成することができます。

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### インスタンスメソッド

利用可能なインスタンスメソッドを以下に示します。指定された設定はインスタンス設定にマージされます。

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])