---
title: 'Config Defaults'
prev_title: 'Схема ответа'
prev_link: '/ru/docs/res_schema'
next_title: 'Перехват запросов'
next_link: '/ru/docs/interceptors'
---

## Config Defaults

Вы можете указать настройки по умолчанию, которые будут применяться к каждому запросу.

### Глобальные значения по умолчанию для axios

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### Пользовательский экземпляр axios

```js
// Установка настройки по умолчанию при создании экземпляра
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// Изменение значения по умолчанию после создания экземпляра
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### Порядок приоритета конфигурации

Конфигурация будет объединена в порядке приоритета. Порядок: значения по умолчанию для библиотеки, найденные в [lib/defaults/index.js](https://github.com/axios/axios/blob/v1.x/lib/defaults/index.js), затем свойства `defaults` для экземпляра и, наконец, аргумент `config` для запроса. Последнее будет иметь приоритет над первым. Вот пример.

```js
// Создайте экземпляр, используя настройки по умолчанию, предоставленные библиотекой.
// На данный момент значение времени ожидания равно «0», что является значением по умолчанию для библиотеки.
const instance = axios.create();

// Переопределите время ожидания по умолчанию для библиотеки
// Теперь все запросы, использующие этот экземпляр, будут ждать 2,5 секунды до истечения времени ожидания.
instance.defaults.timeout = 2500;

// Переопределение времени ожидания для этого запроса, поскольку известно, что он занимает много времени 
instance.get('/longRequest', {
  timeout: 5000
});
```
