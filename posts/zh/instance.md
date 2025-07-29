---
title: 'Axios 实例'
prev_title: 'Axios API'
prev_link: '/zh/docs/api_intro'
next_title: '请求配置'
next_link: '/zh/docs/req_config'
---

### 创建一个实例

您可以使用自定义配置新建一个实例。

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### 实例方法

以下是可用的实例方法。指定的配置将与实例的配置合并。

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])

### 直接使用配置对象调用实例

除了像 `instance.get()` 或 `instance.post()` 这样的便捷方法外，您还可以直接用配置对象调用 Axios 实例。这与 `axios(config)` 的用法相同，适用于需要基于原始配置重新发送请求的场景。

```js
const instance = axios.create({ baseURL: '/api' });

// 类似于 axios(config)
instance({
  url: '/users',
  method: 'get'
});
```

这种方式便于实现重试逻辑，例如处理认证失败时：

```js
instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    await refreshToken();
    return instance(error.config); // 重新发送原始请求
  }

  throw error;
});
```