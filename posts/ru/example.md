---
title: 'Minimal Example'
description: 'Небольшой пример использования axios'
prev_title: 'Введение'
prev_link: '/ru/docs/intro'
next_title: 'POST запросы'
next_link: '/ru/docs/post_example'
---

## note: использование CommonJS 
Чтобы получить типизацию TypeScript (для intellisense / автозаполнения) при использовании импорта CommonJS с `require()` используйте следующий подход:

```js
const axios = require('axios').default;

// axios.<method> теперь будет обеспечивать автозаполнение и ввод параметров
```

# Example

Исполнение `GET` запроса

```js
const axios = require('axios');

// Делаем запрос пользователя с данным ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // обработка успешного запроса
    console.log(response);
  })
  .catch(function (error) {
    // обработка ошибки
    console.log(error);
  })
  .finally(function () {
    // выполняется всегда
  });

// По желанию вышеуказанный запрос можно выполнить так
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // выполняется всегда
  });  

// Хотите использовать async/await? Добавьте ключевое слово `async` к своей внешней функции/методу.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **Примечание:** `async/await` является частью ECMAScript 2017 и не поддерживается в Internet
> Explorer и более старых браузерах, поэтому используйте их осторожностью.
