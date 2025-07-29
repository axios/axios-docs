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

### Вызов экземпляра напрямую с объектом конфигурации

Помимо удобных методов, таких как `instance.get()` или `instance.post()`, вы можете вызывать экземпляр Axios напрямую, передавая объект конфигурации. Это работает так же, как и `axios(config)`, и особенно полезно, если нужно повторно отправить запрос с исходной конфигурацией.

```js
const instance = axios.create({ baseURL: '/api' });

// Работает как axios(config)
instance({
  url: '/users',
  method: 'get'
});
```

Такой подход позволяет реализовать чистую логику повторных попыток, например, при обработке ошибок аутентификации:

```js
instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    await refreshToken();
    return instance(error.config); // Повторить исходный запрос
  }

  throw error;
});
```