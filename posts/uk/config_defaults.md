---
title: 'Конфігурація за замовчуванням'
prev_title: 'Схема відповіді'
prev_link: '/uk/docs/res_schema'
next_title: 'Перехоплювачі'
next_link: '/uk/docs/interceptors'
---

## Конфігурація за замовчуванням

Ви можете вказати стандартні налаштування конфігурації, які будуть застосовані до кожного запиту.

### Глобальні значення за замовчуванням для axios

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### Користувацький екземпляр за замовчуванням 

```js
// Встановіть налаштування за замовчуванням під час створення екземпляра
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// Змінити значення за замовчуванням після створення екземпляра
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### Налаштуйте порядок пріоритету

Config буде об'єднано з порядком пріоритету. Порядок - це стандартні налаштування бібліотеки, знайдені в [lib/defaults/index.js](https://github.com/axios/axios/blob/v1.x/lib/defaults/index.js), потім властивість `defaults` екземпляра і, нарешті, аргумент` config` для запиту. Останні мають пріоритет над першими. Ось приклад.

```js
// Створіть екземпляр, використовуючи стандартні налаштування, надані бібліотекою
// На даний момент значення конфігурації тайм-ауту становить `0`, що є стандартним для бібліотеки
const instance = axios.create();

// Замінити тайм-ауту за замовчуванням для бібліотеки
// Тепер усі запити, які використовують цей екземпляр, чекатимуть 2,5 секунди, перш ніж закінчиться тайм-ауту
instance.defaults.timeout = 2500;

// Відмінити час очікування для цього запиту, оскільки він, як відомо, займає багато часу
instance.get('/longRequest', {
  timeout: 5000
});
```
