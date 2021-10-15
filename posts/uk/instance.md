---
title: 'Екземпляр Axios'
prev_title: 'Axios API'
prev_link: '/uk/docs/api_intro'
next_title: 'Конфігурація запиту'
next_link: '/uk/docs/req_config'
---

### Створення екземпляра

Ви можете створити новий екземпляр axios за допомогою користувацької конфігурації.

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### Методи екземплярів

Нижче перераховані доступні методи екземплярів. Зазначена конфігурація буде об’єднана з конфігурацією екземпляра.

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])