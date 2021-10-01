---
title: 'POST Запити'
description: 'Як виконувати запити POST за допомогою Axios'
prev_title: 'Мінімальний приклад'
prev_link: '/uk/docs/example'
next_title: 'Axios API'
next_link: '/uk/docs/api_intro'
---

Виконання `POST` запиту

```js
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

Виконання декількох одночасних запитів

```js
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });
```
