---
title: 'Экземпляр Axios'
prev_title: 'Axios API'
prev_link: '/docs/api_intro'
next_title: 'Конфигурация запроса'
next_link: '/docs/req_config'
---

### Creating an instance

Вы можете создать новый экземпляр axios с пользовательской конфигурацией.

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### Instance methods

Доступные методы экземпляра перечислены ниже. Указанный конфиг будет объединен с конфигом экземпляра

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])