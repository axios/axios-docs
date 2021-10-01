---
title: 'Обробка помилок'
prev_title: 'Перехоплювачі'
prev_link: '/uk/docs/interceptors'
next_title: 'Скасування запиту'
next_link: '/uk/docs/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // Запит було зроблено, і сервер відповів кодом стану, який 
      // виходить за межі 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // Запит було зроблено, але відповіді не отримано 
      // `error.request` - це екземпляр XMLHttpRequest у браузері та екземпляр 
      // http.ClientRequest у node.js
      console.log(error.request);
    } else {
      // Щось сталося під час налаштування запиту, що викликало помилку
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

Використовуючи параметр конфігурації `validateStatus`, ви можете визначити HTTP-код, який повинен викликати помилку.

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // Вирішуйте, лише якщо код стану менше 500
  }
})
```

Використовуючи `toJSON`, ви отримуєте об'єкт з додатковою інформацією про помилку HTTP.

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```