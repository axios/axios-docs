---
title: 'POST-Anfragen'
prev_title: 'Minimalbeispiel'
prev_link: '/de/docs/example'
next_title: 'Axios-API'
next_link: '/de/docs/api_intro'
---

Eine `POST`-Anfrage ausführen:

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

Mehrere Anfragen gleichzeitig:

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
