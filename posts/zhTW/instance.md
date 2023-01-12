---
title: 'Axios 物件'
prev_title: 'Axios API'
prev_link: '/zhTW/docs/api_intro'
next_title: '請求選項'
next_link: '/zhTW/docs/req_config'
---

### 建立實例

您可以建立一個自訂選項的 Axios 實例。

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### 實例方法

以下列出了所有可用的實例方法。如果您呼叫這些方法時額外提供了選項參數，它將與 Axios 實例自身的選項合併使用。

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])