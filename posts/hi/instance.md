---
title: 'The Axios Instance'
prev_title: 'Axios API'
prev_link: '/docs/api_intro'
next_title: 'Request Config'
next_link: '/docs/req_config'
---

### Creating an instance

You can create a new instance of axios with a custom config.

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### Instance methods

The available instance methods are listed below. The specified config will be merged with the instance config.

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])

### Calling the instance with a config object

In addition to using convenience methods like `instance.get()` or `instance.post()`, you can also call an Axios instance directly with a config object. This is functionally equivalent to `axios(config)`, and is particularly useful when retrying a request using the original configuration.

```js
const instance = axios.create({ baseURL: '/api' });

// Works just like axios(config)
instance({
  url: '/users',
  method: 'get'
});
```

This approach enables clean retry logic when handling authentication errors:

```js
instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    await refreshToken();
    return instance(error.config); // Retry original request
  }

  throw error;
});
```
