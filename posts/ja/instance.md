---
title: 'Axios インスタンス'
prev_title: 'Axios API'
prev_link: '/ja/docs/api_intro'
next_title: 'リクエスト設定'
next_link: '/ja/docs/req_config'
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
