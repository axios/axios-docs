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

### Виклик екземпляра напряму з об'єктом конфігурації

Окрім зручних методів, таких як `instance.get()` чи `instance.post()`, ви можете викликати екземпляр Axios напряму, передаючи об'єкт конфігурації. Це працює так само, як і `axios(config)`, і особливо корисно, якщо потрібно повторно виконати запит з початковою конфігурацією.

```js
const instance = axios.create({ baseURL: '/api' });

// Працює як axios(config)
instance({
  url: '/users',
  method: 'get'
});
```

Такий підхід дозволяє реалізувати чисту логіку повторних спроб, наприклад, при обробці помилок автентифікації:

```js
instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    await refreshToken();
    return instance(error.config); // Повторити початковий запит
  }

  throw error;
});
```