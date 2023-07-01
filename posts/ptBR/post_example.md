---
title: 'Requisições POST'
description: 'Como executar uma requisição post com Axios'
prev_title: 'Exemplos minimalistas'
prev_link: '/ptBR/docs/example'
next_title: 'Axios API'
next_link: '/ptBR/docs/api_intro'
---

Executando uma requisição `POST`

```js
axios.post('/user', {
    firstName: 'Santos',
    lastName: 'Dumont'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  });
```

Executando múltiplas requisições simultaneamente

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
