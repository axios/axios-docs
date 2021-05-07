---
title: 'Requisições POST'
description: 'Como performar uma requisição post com Axios'
prev_title: 'Exemplos minimalistas'
prev_link: '/docs/ptBR/example'
next_title: 'Axios API'
next_link: '/docs/ptBR/api_intro'
---

Perfomando uma requisição `POST`
<!--Performing a `POST` request-->

```js
axios.post('/user', {
    firstName: 'Doctor',
    lastName: 'Who'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

Perfomando multiplas requisições simultaneamente
<!--Performing multiple concurrent requests-->

```js
function getUserAccount() {
  return axios.get('/user/1963');
}

function getUserPermissions() {
  return axios.get('/user/1963/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });
```