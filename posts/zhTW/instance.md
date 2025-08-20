---
title: 'Axios 實體'
prev_title: 'Axios API'
prev_link: '/zhTW/docs/api_intro'
next_title: '請求配置'
next_link: '/zhTW/docs/req_config'
---

### 建立 Axios 實體

可以透過自訂的配置建立一個新的 axios 實體。

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### 實體方法

下列為所有實體方法，若有指定額外配置，將會與實體配置合併。

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])