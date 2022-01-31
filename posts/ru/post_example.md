---
title: 'POST запросы'
description: 'Как выполнять POST-запросы с помощью Axios'
prev_title: 'Пример'
prev_link: '/docs/example'
next_title: 'Axios API'
next_link: '/docs/api_intro'
---

Выполнение `POST`-запроса

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

Выполнение нескольких одновременных запросов

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
