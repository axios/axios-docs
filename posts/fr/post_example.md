---
title: 'Requêtes POST'
description: 'Comment faire des requêtes POST avec Axios'
prev_title: 'Exemple minimal'
prev_link: '/fr/docs/example'
next_title: 'API Axios'
next_link: '/fr/docs/api_intro'
---

Faire une requête `POST`

```js
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Pierrafeu'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

Faire plusieurs requêtes en parallèle

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
