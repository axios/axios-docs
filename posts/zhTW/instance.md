---
title: 'Axios 實體'
prev_title: 'Axios API'
prev_link: '/docs/api_intro'
next_title: '請求設定'
next_link: '/docs/req_config'
---

### 建立實體

您可以建立有自訂設定的新 axios 實體。

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### 實體方式

以下列出了可用的實體方式。指定的設定將與實體的設定合併。

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])